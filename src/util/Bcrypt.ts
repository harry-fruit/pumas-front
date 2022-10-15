import bcrypt from 'bcrypt';

export const encrypt = (toEncrypt: string): string => {
    const saltRounds: number = 10;
    return bcrypt.hashSync(toEncrypt, saltRounds);
};

// export const decrypt