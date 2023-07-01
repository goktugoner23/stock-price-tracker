import jwt from "jsonwebtoken";
import { parseCookies } from "nookies";
import prisma from "./prismadb";

const getServerSidePropsWithTokenData = (dataHandler) => {
    const getServerSideProps = async ({ req }) => {
        const dataHandlerResult = dataHandler ? await dataHandler(context) : {};

        const cookies = parseCookies({ req });
        const token = cookies.token;

        const decodedJWTToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!decodedJWTToken.userId) {
            return {
                ...dataHandlerResult,
                props: {
                    ...dataHandlerResult?.props,
                    user: null,
                },
            };
        }

        const user = await prisma.user.findUnique({
            where: { id: decodedJWTToken.userId },
        });
        // delete password
        delete user["password"];

        return {
            ...dataHandlerResult,
            props: {
                ...dataHandlerResult?.props,
                user: user,
            },
        };
    };

    return getServerSideProps;
};

export default getServerSidePropsWithTokenData;
