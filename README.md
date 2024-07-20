## Money Lending Application
Our money lending app is rocking - we’ve built a great backend on secure APIs. It means faster and more convenient for you.
Sign up and log in are snap, powered by their respective APIs while keeping your data safe. 
And this is the same for monitoring account balances - use our user data API to find our financial data. 
But the core capability is actually the Borrow Money API.This creative instrument improves the flow of online borrowing, enabling you to apply for money electronically with minimal effort, no more queuing or mountains of paper to fill. 
All the tedious work is handled by our secure API server-side processing engine, ensuring that from the beginning until the end, no hitches are encountered during the whole procedure. 
All you need is to forget about the agony and contemplate about our simple to use money-lending application if you want.

## Tech Stacks Used :  
* Node.js :  Provides the foundation for running the application's server-side logic using JavaScript.
* Express: Acts as a web framework for Node.js, simplifying the handling of user requests and routing them to the appropriate parts of the application.
* MongoDB: Serves as the application's database, offering a flexible storage solution for user and transaction data.
* JWT: Implements a secure authentication system using JSON Web Tokens, allowing users to be verified and granted access to specific features.

## API Endpoints 
 1. Sign Up API (POST Request) 
     ##  Functionality:
    * Approve or reject the application based on user age and monthly salary.
    * Register the user after all verification.
    * Maintain a status field to handle the user application status.
    
    ![Screenshot_20240720_200554](https://github.com/user-attachments/assets/7f7ebd4d-f322-49ae-a205-6595c5ca7d4c)

                                                 Monthly salary should be 25k or more!!
    ![Screenshot_20240720_200536](https://github.com/user-attachments/assets/8bae2fe2-f35e-438f-ba77-82bb6c684e66)

                                                 User should be above 20 years of age!!
    ![Screenshot_20240720_193810](https://github.com/user-attachments/assets/8b850383-569a-4bfd-9056-97c596a3c788)

                                                 User Created Successfully!!

2. Login API (POST Request)
   ##  Functionality:
    * Allow user to login using email and password.
    * Use JWT for authentication.
    
![Screenshot_20240720_193854](https://github.com/user-attachments/assets/951b8acc-bcba-4d80-a159-5f86fb12c6a2)

                                          User Logged in and token created successfully !!

  3. Show User Data (GET Request)
        ##  Functionality:
      *  Showuserdata with the following fields:
           * Purchase Power amount
           * Phonenumber
           * Email
           * Dateof user registration
           * DOB
           * Monthly salary

![Screenshot_20240720_204156](https://github.com/user-attachments/assets/1ecdd491-b22d-4bbf-a43d-675cee281dee)

                                                   Displaying User Data !! 

 4. Borrow Money API (POST Request)
      ##  Functionality:
     * Allow the user to borrow money from the application.
     * Updatethe Purchase Power amount.
     * Calculate the tenure of repayments and the monthly repayments with an interest rate of 8%.
     * Return the updated Purchase Power amount and the monthly repayment amount

![Screenshot_20240720_204500](https://github.com/user-attachments/assets/954df1ab-3dd6-4447-89bc-2d2a5e7fb0fa)

                                               Borrow Money API implemented and borrowed money !!   

 ![Screenshot_20240720_204523](https://github.com/user-attachments/assets/3e0d0007-c104-4445-92b5-8be3fb6a7acd)

                                               Purchase power changed after borrowing money !!

  ## MongoDB Connection 
  
  ![Screenshot_20240720_205708](https://github.com/user-attachments/assets/a8d8d61e-53be-4abb-95c5-e2cbd0deb8eb)

                                               MongoDB connection successfull!!

                                                     
