[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_IojtdoU)
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- ✔️ My code's working just fine! 🥳
- ✔️ I have recorded a video showing it working and embedded it in the README ▶️
- ✔️ I have tested all the normal working cases 😎
- ✔️ I have even solved some edge cases (brownie points) 💪
- ✔️ I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section
Link for the Project: https://youtu.be/zAIZSAvX1AE

The provided code consists of two parts: a Google Apps Script and an HTML/JavaScript frontend.

The Google Apps Script handles the server-side logic within Google Sheets. It creates a custom menu, opens a modal dialog, and contains functions for processing CSV data and importing it into the sheet. Additionally, it includes functions to set and retrieve CSV data and selected columns.

The HTML/JavaScript frontend creates a user interface within a modal dialog for users to interact with. Users can either drag and drop a CSV file or select one using a file input. The script reads the CSV file, extracts column names, and dynamically generates checkboxes for column selection. A "Import CSV" button initiates the import process, passing data to the Google Apps Script functions.

**My Planned Out Approach**

In these crucial project development steps, I establish the foundation for the CSV file importer:

**Step 1: Create the HTML Structure**
In this step, I start by crafting an HTML file that defines the layout and components of the web application. I meticulously structure it to include key elements, notably a user-friendly drag-and-drop area for file uploads, checkboxes for column selection, and a prominent import button. These HTML components lay the groundwork for a seamless user experience.

**Step 2: Implement JavaScript Functionality**
JavaScript is the heart of the project's functionality. In this step, I create a JavaScript file (script.js) to manage the logic. By implementing event listeners, I respond to user actions, such as drag-and-drop events, file input changes, and button clicks. Additionally, I empower the application to read and parse CSV files, dynamically generate checkboxes based on the uploaded file's headers, and efficiently handle the selection and storage of chosen columns.

**Step 3: Set Up Google Apps Script**
This step is pivotal for integrating the web application with Google Apps Script, enabling powerful data processing capabilities. I initiated a Google Apps Script project from my Google Drive account and crafted two essential functions: setCSVData() and setSelectedColumns(). These functions serve as intermediaries for storing CSV data and selected columns. Furthermore, I created a central processing function, such as importCSVData(), responsible for the core CSV data processing tasks. Leveraging Google Apps Script, I unlock the potential for data manipulation, validation, and customized scripting.