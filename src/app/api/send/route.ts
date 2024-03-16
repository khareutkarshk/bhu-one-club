import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request:NextRequest){

    try{

        const reqBody = await request.json();
        const {name, email, mobileNumber, firstPreference, secondPreference, thirdPreference, experience, transactionId, category} = reqBody;

        console.log(reqBody);

        const mail = await resend.emails.send({
            from: 'Hello <khareu450@1percentbhu.com>',
            to: ['iace2.otheonepercent@gmail.com'],
            subject: 'One BHU New Form Entry',
            text: `New Entry In ${category} Form\nName: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nFirst Preference: ${firstPreference}\nSecond Preference: ${secondPreference}\nThird Preference: ${thirdPreference}\n Experience: ${experience}\n Transaction Id: ${transactionId}`,
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

        console.log(mail);
        


        return NextResponse.json({
            message:"Email verified successfully",
            seccess:true,

        })


    } catch (error:any){
        return NextResponse.json({error:error.message},
            {status:500})
    }
}