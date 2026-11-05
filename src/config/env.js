const obrigatorios = [MONGO_URI, JWT_SCRET];

for (const nome of obrigatorios) {
    if(!process.env[nome]){
        console.error(`Falta a variável ${nome} no ficheiro .env`);
        process.exit(1);
    }
}
if(!process.env.JWT_SECRET.length < 32){
    console.error(`JWT_SECRET deve ter pelo menos 32 caracteres`);
    process.exit(10);
    
}

export const env = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SCRET: process.env.JWT_SECRET,
    JWT_EXPIRE: process.env.JWT_EXPIRE_IN || '1d',
    CORS_ORIGIN: (process.env.CORS_ORIGIN || 'http://localhost:4200').split(',').map((o )=> o.trim()),
}