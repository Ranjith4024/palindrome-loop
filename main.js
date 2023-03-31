let input=prompt("enter the number");
            let input0=input;
            let input1=0;
            while(input>0){
                let input2=input%10;
                input=(input-input2)/10;
                input1=(input1*10)+input2;
            }
            if(input1==input0){
                    console.log(`${input1} is palindrome num`);
                }
                else{
                    console.log(`${input1} is not palindrome num`);
             }