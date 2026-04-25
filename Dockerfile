FROM node:18-alpine

WORKDIR /app

# העתקת קבצי ההגדרות
COPY package*.json ./
COPY tsconfig.json ./

# התקנה (כולל הספריות שצריך ל-build)
RUN npm install

# העתקת הקוד
COPY . .

# בנייה של הפרויקט
RUN npm run build

# חשיפת הפורט שגוגל מצפה לו
EXPOSE 8080

# הרצה
CMD ["npm", "start"]