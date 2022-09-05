import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-text'>
            <div>
                <h1>1. কন্টেক্সট এপিআই কি?</h1>
                <h5>কন্টেক্সট এপিআই দিয়ে props mapping না করেই tree এর নিচের দিকের কোন child component তার উপরের দিকের যেকোন component এ access পাবে।
                    কন্টেক্সট shared data কে global হিসেবে ধরে নেয় যাতে component tree এর সবাই মোটামুটি access পায়।</h5>
                <h2>Context কিভাবে তৈরি করব</h2>
                <p>
                    প্রথমেই আমাদের root component (App.js) এ createContext দিয়ে একটা Context Object তৈরি করে ফেলব এবং একে export করে দিব যেন যেকোন component ও একে access করতে পারে।
                    এই context object এর দুইটা property থাকে যা দিয়ে আমি আমার component render করতে পারব একটা Provider আর আরেকটা হল Consumer.
                </p>
                <h2>Context.Provider কি আর কিভাবে application এ set করব</h2>
                <p>Provider দিয়ে মূলত Component গুলোর মধ্য দিয়ে কি value pass করব তা set করে দেওয়া হয় । এটা set করাটাও সোজা। তাই আমরা যেসব component এ আমরা context value pass করতে চাই, তাদেরকে AppContext.Provider এর মধ্যে রাখব আর current value টা value তে set করে দিব।</p>
                <h2>Context.Consumer দিয়ে কিভাবে application context value পাব</h2>
                <p>Component এর মধ্যে আমার Context Value পেতে চাইলে আমরা AppContext.Consumer দিয়ে wrap করে ফেলব। আর তার scope এর মাঝে value হিসেবে আমাদের context value পেয়ে যাব। আমরা Provider এর মাঝে context value হিসেবে set করেছিলাম আমদের user কে , তাই value.type বলতে user.type কেই প আমরা পাব।</p>
                <h2>Application এ context value পাবার আরেকটা উপায় useContext</h2>
                <p>useContext আসলে একটা React Hook, যে আসলে parameter হিসেবে একটা context object কে নেয় , আর return করে current context value কে। আর current context value ঔটাই যেটা component tree তে তার সবচেয়ে কাছের Provider value হিসেবে set করে দিয়েছে। useContext একটা hook হওয়াতে সবচেয়ে সুবিধার জায়গাটা হল, যখনি context value update হয়, তখনি সে নিজের component কে rerender করে latest context value টা নিয়ে নেয়।</p>
            </div>
            <div>
                <h1>2. সিমান্টিক ট্যাগ কি</h1>
                <p>সিমেন্টিক এলিমেন্টের নাম দেখেই এলিমেন্টের কন্টেন্টগুলো সম্পর্কে আমরা ধারনা পাবো। এইচটিএমএল(৫) এর সিমেন্টিক এলিমেন্ট সকল আধুনিক ব্রাউজারে সাপোর্ট করে। একটি ওয়েব পেজের বিভিন্ন অংশকে ডিফাইন করার জন্য এইচটিএমএল(৫) এ নতুন সিমেন্টিক এলিমেন্টকে ব্যবহার করা হয়ঃ  এইচটিএমএল(৫) এর figure এলিমেন্ট ব্যবহার করে ইমেজ এবং ইমেজের ক্যাপশন একসাথে দেখানো হয়।  ডকুমেন্টের কন্টেন্টকে আলাদা করার জন্য section এলিমেন্ট ব্যবহার করা হয়।
                    এইচটিএমএল(৫) এ, article এলিমেন্ট অন্যান্য এলিমেন্টের একটি স্বয়ংসম্পূর্ণ ব্লক হিসেবে ডিফাইন করা হয়। section এলিমেন্ট অন্যান্য এলিমেন্টের একটি ব্লক হিসেবে ডিফাইন করা হয়।
                    তার মানে, আমরা এদের একটির মধ্যে অন্যটিকে ব্যবহার করতে পারবো। আমরা section এলিমেন্টের মধ্যে article এলিমেন্ট ব্যবহার করতে পারি অথবা article এলিমেন্টের মধ্যে section এলিমেন্ট ব্যবহার করতে পারি। এটি একান্তই নিজের ইচ্ছার উপর নির্ভরশীল।
                    footer এলিমেন্ট একটি ডকুমেন্ট অথবা একটি সেকশনের জন্য ফুটার নির্ধারণ করে। ফুটারে সাধারনত ডকুমেন্টের লেখক, কপিরাইট তথ্য, ব্যবহারের শর্তাবলীর জন্য লিঙ্ক, যোগাযোগের তথ্য ইত্যাদি দেওয়া থাকে। একটি ডকুমেন্টে একাধিক footer এলিমেন্ট থাকতে পারে

                    nav এলিমেন্ট নেভিগেশন লিংকের সেট নির্ধারণ করে। nav এলিমেন্ট অধিক সংখ্যক নেভিগেশন লিংকের জন্য ব্যবহার করা হয়।

                    aside এলিমেন্ট তার পাশের কিছু কন্টেন্টকে নির্দেশ করে। aside কন্টেন্টগুলো তার পার্শ্ববর্তী কন্টেন্টগুলোর সাথে সম্পর্কযুক্ত থাকে।
                </p>
            </div>
            <div>
                <h1>3.  ইনলাইন ব্লক এবং ইনলাইন ব্লক ইলিমেন্ট এর মধ্য পার্থাক্য কি ? </h1>
                <div>
                    <h3>ইনলাইন ব্লক</h3>
                    <p>
                        ইনলাইন এলিমেন্ট শুরু হতে কোন নতুন লাইনের প্রয়োজন হয় না এবং এই এলিমেন্টটি শুধুমাত্র প্রয়োজন অনুযায়ী প্রস্থ দখল করবে।
                        প্যারাগ্রাফ এলিমেন্টের ভিতরে span একটি ইনলাইন এলিমেন্ট।
                        ইনলাইন এলিমেন্টের উদাহরনঃ

                        a	, abbr	, acronym ,	b 	, bdo , big  , br , button , cite	, code , dfn , em ,  i ,	img , input , kbd , label 	, map , object , q  , samp	, script , select , small	, span ,  strong , sub   , sup , textarea 	, time , tt , var
                    </p>
                </div>
                <div>
                    <h3>ইনলাইন ব্লক ইলিমেন্ট</h3>
                    <p>ব্লক-লেভেল এলিমেন্ট সর্বদা একটি নতুন লাইন থেকে শুরু হয় এবং ঐ লাইনের সম্পূর্ন প্রস্থ দখল করে নেয়(বাম থেকে ডানে যতটু্কু প্রসারিত হতে পারে)।
                        ব্লক-লেভেল এলিমেন্টের উদাহরনঃ

                        address  ,  article ,  aside ,  blockquote  ,  canvas , dd , div , dl ,  dt, fieldset	, figcaption , figure  , footer	, form	,  h1- h6 , header	, hr	,li , main  ,  nav  , noscript   ,  ol  ,  output , p , pre , section , table , tfoot ,  ul  , video
                        এগুলো ব্লক-লেভেল এলিমেন্ট।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;