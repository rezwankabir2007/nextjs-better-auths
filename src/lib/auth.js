import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ১. Environment Variable চেক করে MongoClient তৈরি
const url = process.env.BETTER_AUTH_DB_URL;

if (!url) {
  throw new Error("Please define BETTER_AUTH_DB_URL in your .env file");
}

const client = new MongoClient(url);

// ২. নির্দিষ্ট Database নাম দিয়ে Connection তৈরি (যেমন: 'my_app_db')
const db = client.db("my_app_db"); 

export const auth = betterAuth({
  database: mongodbAdapter(db), // অ্যাডাপ্টারে সরাসরি db পাস করুন
  
  emailAndPassword: { 
    enabled: true, 
  },
  
  //...other options
});