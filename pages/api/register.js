// pages/api/register.js

import prisma from "../../utils/prismadb";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(400)
            .json({ error: "Email and password are required" });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: { 
                email, 
                password: hashedPassword,
            },
        });

        return res.status(200).json({ msg: "Account created." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
