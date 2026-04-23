# 1. בחירת תמונת הבסיס של Node
FROM node:18-alpine

# 2. יצירת תיקיית עבודה בתוך הקונטיינר
WORKDIR /app

# 3. העתקת קובצי ה-Dependencies
COPY package*.json ./

# 4. התקנת הספריות
RUN npm install

# 5. העתקת שאר קובצי הפרויקט (כולל תיקיית src)
COPY . .

# 6. קימפול ה-TypeScript ל-JavaScript
RUN npm run build

# 7. חשיפת הפורט (במקרה שלך 3002 כפי שראינו בטרמינל)
EXPOSE 3002

# 8. פקודת ההרצה
CMD ["node", "dist/server.js"]