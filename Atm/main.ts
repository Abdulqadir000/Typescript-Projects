import inquirer from "inquirer";

interface userAnswers {
   userId: String,
   userPin: string,
   accountType: string,
   transactionType: string,
   amount: number
}

async function StartATMConversation() {
   console.log("Welcome To ApnaBank");

   let answers: userAnswers = await inquirer.prompt([
      {
         type: "input",
         name: "userId",
         message: "Enter Your user ID:"

      },
      {
         type: "number",
         name: "userPin",
         message: "Enter Your user PIN:"

      },
      {
         type: "list",
         name: "accountType",
         choices: ["Current", "Saving"],
         message: "Select Your Account Type:"

      },
      {
         type: "list",
         name: "transactionType",
         choices: (answers: any) => {
            if (answers.accountType === "Current") {
               return ["Normal Withdrawal", "Fast Withdrawal"];
            }
           
         },
         
         message: "Select Your Transaction Type:"

      },
      {
         type: "list",
         name: "amount",
         choices: [1000, 2000, 5000, 10000, 20000],
         message: "Select Your Amount:",
         when(answers: any) {
            return answers.transactionType === "Fast Withdrawal";
         }
      },

      {
         type: "number",
         name: "amount",
         message: "Enter Your Withdrawal Amount:",
         when: (answers: any) =>
            answers.transactionType === "Normal Withdrawal"
      },

   ]
   
   )

   if (answers.userId && answers.userPin) {
      console.log("processing your request...")
      let balance = Math.floor(Math.random() * 10000);
      console.log("Your Current Balance is:PKR", balance.toLocaleString())
      let withdrawalamm = answers.amount;
      if (balance >= withdrawalamm) {
         let remainingBal = balance - withdrawalamm;
         console.log("Transaction is successfull. Your remaining balance is:PKR", remainingBal.toLocaleString());
      }
      else {
         console.log("Insufficent balance")
      }

   }


}

StartATMConversation();
