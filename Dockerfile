FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de dependência
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Gerar cliente Prisma e Buildar o frontend
RUN npx prisma generate
RUN npm run build

# Expor porta da aplicação
EXPOSE 3001

# Comando para iniciar
CMD ["npx", "tsx", "api/server.ts"]
