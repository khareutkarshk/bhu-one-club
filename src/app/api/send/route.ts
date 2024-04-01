import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request:NextRequest){
    
    try{

        const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
        resend.domains.create({ name: '1percentbhu.com' });

        const reqBody = await request.json();
        const {name, email, mobileNumber, firstPreference,schoolCollege, secondPreference, thirdPreference, experience, transactionId, category, quizCategory} = reqBody;

        console.log('reqbody ',reqBody);
        let mailBody;
        switch (category) {
            case 'Youth Parliament':
                mailBody = `New Entry In ${category} Form\nName: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nFirst Preference: ${firstPreference}\nSecond Preference: ${secondPreference}\nThird Preference: ${thirdPreference}\n Experience: ${experience}\n Transaction Id: ${transactionId} \n School/College ${schoolCollege}`
                break;
            case 'Quiz':
                mailBody = `New Entry In ${category} Form\nName: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nQuiz Category: ${quizCategory}\n Transaction Id: ${transactionId} \n School/College ${schoolCollege}`
                break
            case 'MOCK CSE': 
                mailBody = `New Entry In ${category} Form\nName: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nTransaction Id: ${transactionId}\n School/College ${schoolCollege}`
                break
            default:
                break;
        }

        console.log('mailbody', mailBody);
        

        const mail = await resend.emails.send({
            from: 'Hello <khareu450@1percentbhu.com>',
            to: ['iace2.otheonepercent@gmail.com'],
            subject: 'One BHU New Form Entry',
            text: `Mail Body ${mailBody}`,
            headers: {
                'X-Entity-Ref-ID': '123456789',
            },
            tags: [
                {
                    name: 'category',
                    value: 'confirm_email',
                },
            ],
        });

        console.log('mail ',mail);
        


        return NextResponse.json({
            message:"Email verified successfully",
            seccess:true,

        })


    } catch (error:any){
        return NextResponse.json({error:error.message},
            {status:500})
    }
}