"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import lokSabha from "@/constant/lokSabha.json"
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import aippm from "@/constant/aippm.json"
import nmc from "@/constant/nmc.json"
import unga from "@/constant/unga.json"
import unWomen from "@/constant/unWomen.json"
import unhrc from "@/constant/unhrc.json"
import qr from "@/asset/qr.jpg"
import Image from 'next/image';
import upvs from '@/constant/upVidhan.json'
import { toast } from 'react-toastify';
import axios from 'axios';
import Link from 'next/link';
import ccc from '@/constant/ccc.json'

function PortfolioForm() {
    const pathname = usePathname();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [selectedOptions, setSelectedOptions] = useState({ first: "", second: "", third: "" });
    const [amount, setamount] = useState<any>()
    const firstPreference = watch("firstPreference");
    const secondPreference = watch("secondPreference");
    const thirdPreference = watch("thirdPreference");
    const [loksabha, setLoksabha] = useState<any>([])
    const [loading, setLoading] = useState(false);
    const [pageName, setPageName] = useState<any>('');
    const modalRef = useRef(null);

    const [isOpen, setIsOpen] = useState(true);
    const closeModal = () => setIsOpen(false);
    const [modelContent, setModelContent] = useState(``)

    useEffect(() => {
        setSelectedOptions({ first: firstPreference, second: secondPreference, third: thirdPreference });
        console.log(selectedOptions);

    }, [firstPreference, secondPreference, thirdPreference]);


    useEffect(() => {
        let pageTitle = pathname.split('/')[2];
        let pageTitleArray = pageTitle.split('-');
        pageTitleArray = pageTitleArray.map((item: any) => item.charAt(0).toUpperCase() + item.slice(1) + ' ');
        setPageName(pageTitleArray);
        if (pathname === '/youth-parliament/lok-sabha') {
            setLoksabha(lokSabha)
            setamount(800)
            setModelContent(`<h1 class="text-2xl font-bold mb-4">LOK SABHA - THE LOWER HOUSE OF THE INDIAN PARLIAMENT</h1>
            <p class="text-base text-justify">The Lok Sabha represents the diversity of India's population with members elected through a democratic process.The key function of Lok Sabha is to enact laws and amend existing legislations,also responsible for ensuring the government's stability and effectiveness.The Prime Minister of the majority party is the leader of the Lok Sabha and the Speaker of the Lok Sabha presides over its sessions, maintaining orders and facilitating debates.
            Overall,Lok Sabha serves as a vital institution in India's democratic framework which shapes the course of Nation's development and upholds the values enshrined in the Indian constitution
            <br/>
            <br/>
            AGENDA - Deliberations on electoral reforms should prioritise the goal of creating a fair and inclusive electoral system that also protects the rights of citizens.This may involve implementing affirmative action measures such as  quotas for women or minorities candidates, implementing strict regulations on campaign finance,promoting voter education,promote diversity in political representation,etc.
            By addressing these issues,we can strengthen the foundation of our democratic institutions and ensure that elections truly reflect the will of the people.</p>`)


        } else if (pathname === '/youth-parliament/aippm') {
            setLoksabha(aippm)
            setamount(800)

            setModelContent(`<h1 class="text-2xl font-bold mb-4">AIPPM</h1>
            <p class="text-base text-justify">The All India Political Party Meet is a platform that stimulates a gathering of political parties from India to engage in meaningful deliberation upon common challenges ahead of the country. Keeping diplomacy and individuals' rights as a priority, issues of national importance are deliberated upon. This influential forum requires crucial analysis of political parties and their ideologies and beliefs to get a subjective understanding of their take on the issues concerned. The AIPPM, as a committee, offers an insight into process that goes behind working of governance and overall political environment in India. 
            <br/>
            <br/>
            Agenda: Discussion upon the Indian Economy with special emphasis on improving the living standard of people.
            <br/>
            <br/>
            The agenda offers the delegates the opportunity to discuss the various facets of India's economic landscape with special focus on developing strategies to minimize economic differences among various sections. This shall include, but not be limited to scale of government intervention, employment opportunities, economic oppresion, growth of self help groups, technological revolution and social welfare programmes.
            Delegates will explore innovative approaches to foster inclusive growth, address income inequality, and ensure equitable access to essential services and resources. 
            The agenda encourages delegates to propose practical solutions, draft resolutions, and engage in collaborative negotiations to draft actionable plans that prioritize the improvement of living standards for all segments of society in India.</p>`)

        }
        else if (pathname === '/youth-parliament/nmc') {
            setLoksabha(nmc)
            setamount(700)
            setModelContent(`<h1 class="text-2xl font-bold mb-4">National Millennium Conference</h1>
            <p class="text-base text-justify">Once Former Prime minister Vajpayee said,
            <br/>
            "पृथ्वी लाखों वर्ष पुरानी,<br/>
            जीवन एक अनन्त कहानी<br/>
            पर तन की अपनी सीमाएं<br/>
            यद्यपि सौ शरदों की वाणी"<br/>
            <br/>
            Vajapeyi highlights his pain of limitations of the body with time. but thoughts are immortal 1%Clubs very exclusive idea of the National Millennium Conference removes this obstacle of time and puts two leaders from different times from the history on the same table. How will two longest serving PMs of The nation namely indira gandhi and narendra modi argue over the idea of nationalism.
             how shall the definition of Woman empowerment differ between sarojini naidu and shushma swaraj 
            How will Arvind kejriwal and Rajiv gandhi counter each other's ideas of development
            NMC is the only probable platform to answer all such interesting and exciting conflicts.
            <br/>
            <br/>
            As the agenda suggests
            The question of citizenship has always been dwelling between the ideology of the leaders as the constitution is silent over it and it's the institution that defines and refines it time to time how will two HMs of India namely shah and patel react over the question of citizenship.we invite you to dive in this all sound conference having the leadeds best of their times.</p>`)

        }
        else if (pathname === '/youth-parliament/crisis-committee') {
            setLoksabha(ccc)
            setamount(700)
            setModelContent(`<h1 class="text-2xl font-bold mb-4">Crisis Committee</h1>
            <p class="text-base text-justify">The Crisis Committee is the principal policy-making body of UN. Inclusive of all 193 member states,  The UNGA offers a forum for deliberation upon global issues, including peace and security, cross-border terrorism, international law and human rights. Each nation state has an equal vote in the General Assembly, therefore, fostering cooperation and promoting collective action to resolve issues in a multilateral fashion.
            <br/>
            <br/>
            AGENDA: Working on UN reforms with respect to addressing contemporary security challenges.
            The agenda focuses on the imperative need to bring vital reforms in the working of UN to deal with modern day security issues more efficiently. Contemporary security challenges, ranging from cyber warfare and terrorism to climate-change induced conflicts, require efforts at enhancing UN’s capacity to respond to evolving threats to international peace and security.
            Delegates will deliberate on ways to strengthen the existing mechanism of the General Assembly to ensure its relevance in addressing the root-cause of emerging threats. Delegates are encouraged to develop actionable reform proposals that prioritize multilateral cooperation and diplomacy to navigate the complexities of contemporary security threats worldwide.</p>`)

        }
        else if (pathname === '/youth-parliament/un-women') {
            setLoksabha(unWomen)
            setamount(700)
            setModelContent(`<h1 class="text-2xl font-bold mb-4">UN Women</h1>
            <p class="text-base text-justify">"महिलाओं को समान अधिकार प्रदान करना हमारी दायित्व है, और यह समृद्धि की दिशा में महत्वपूर्ण कदम है।"
            <br/>
            <br/>
            The UNC for Women works towards achieving gender equality and the empowerment of women in various aspects of life,including politics , economics and social development.The key priority of UNC for Women is to eliminate violence against women and girls and promote economic empowerment by supporting entrepreneurship, access to financial resources and skill development.The UNC supports initiatives to increase representation of women in parliament, government and peace building processes.It also plays a vital role in advancing gender equality and empowering women worldwide by access to quality education, healthcare  and economic opportunities
            <br/>
            <br/>

            AGENDA - Ensuring reproductive rights for women is essential for promoting gender equality, autonomy,self determination and dignity.It empowers women to make one's own choices related to contraception, pregnancy and abortion. International human rights instruments such as, the Convention on the elimination of all forms of discrimination against women(CEDAW)provide a framework for protecting women's reproductive rights.Societies can create an inclusive environment where all Individuals can exercise their rights and live with dignity and respect</p>`)

        }
        else if (pathname === '/youth-parliament/unhrc') {
            setLoksabha(unhrc)
            setamount(700)
            setModelContent(`<h1 class="text-2xl font-bold mb-4">UNHRC</h1>
            <p class="text-base text-justify">The United Nations Human Rights Commission, founded in 2006, is a global organisation with an objective of protection and promotion of human rights around the globe. Comprising of 47 member states, it sustains its mandate of upholding the principles enshrined in the Universal Declaration of Human Rights. The UNHRC, thus, serves as a platform for passing resolutions, conducting investigation and addressing violation of human rights across countries, including coercion, hate speech and discrimination.
            <br/>
            <br/> 
            AGENDA: Deliberation upon ensuring universal human rights for oppressed minorities.
             The agenda calls upon the delegates the need to address systemic difficulties faced by minorities across the globe and to develop comprehensive solutions to overcome these.
             <br/>
            Oppressed minorities, whether religious, linguistic or cultural, have witnessed discrimination, coercion and abuse due to deep-rooted prejudices and imbalances in the society. Delegates are tasked with exploring ways of securing fundamental rights of marginalized sections, addressing socio-economic disparities and providing access to justice and education to all.
            Ultimately, delegates have to strive to develop intersectional and inclusive approaches that leave no minority group behind.</p>`)

        } else if (pathname === '/youth-parliament/up-vidhan-sabha') {
            setLoksabha(upvs)
            setamount(700)
            setModelContent(`<h1 class="text-2xl font-bold mb-4">UP Vidhan Sabha.</h1>
            <p class="text-base text-justify">The state of Taj and Ram the state of Buddha and Mahaveer. the land where all the religions meets like the streams of Ganga Jamuna  and Saraswati at Prayag.the government has passed certain laws for tackling the issue of conversion which undermines the freedom of religion at the same time questions the security and independence of the girls in the society.the state who had the honour of having the first female governor and also a vibrant female chief minister how will the state of adityanath counter with questions of secularism and at the same time the opposition response over the question of female security.
            1% club invites you to answer  the agenda over the issue in their UP Vidhansabha committee</p>`)
        }

    }, [])

    const showModel = () => {
        const model = document.getElementById('my_model_5') as HTMLDialogElement;
        if (model) {
            model.showModal();
        }
    };


    const submitClick = async (data: any) => {
        
        try {
            setLoading(true);
            const payload = {...data, 
                'ACCESS_TOKEN': 'bCXHldXmCdOR6ZIvHpDXGtQnUh99VXj6NfNw1YfThfKghGjCoS',
                "form_name": `${pageName}`
            };
            console.log(payload);
            
            // const mail = await axios.post('/api/send', data);
            const res = await axios.post('/youth-parliament/new', payload);
            toast.success('We have saved your response.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false);
        } catch (error:any) {
            setLoading(false);
            console.log(error);
            

            
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">

            <div className="card-body relative">
                <h2 className="card-title justify-center text-3xl items-center text-gray-900">Register for {pageName}</h2>
                <div>
                    {isOpen ? (
                        <div className="absolute top-0 left-0 flex items-center justify-center z-50">
                            <div className="bg-gray-800 bg-opacity-80 rounded shadow-lg p-4 sm:p-8 md:p-6 m-4 sm:m-0 md:w-full md:h-full max-h-full text-center z-50 overflow-auto">
                                <div className='text-white' dangerouslySetInnerHTML={{ __html: modelContent }}></div>
                                <button
                                    onClick={closeModal}
                                    className="mt-4 px-4 py-2 text-white bg-blue-500 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ): null}
                </div>

                <div>
                    <form onSubmit={handleSubmit(submitClick)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder='Enter Your Name' {...register('name', { required: true })} className="input text-black input-bordered input-info" />
                            {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder='Enter Email' {...register('email', { required: true })} className="input text-black input-bordered input-info" />
                            {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input type="tel" placeholder='Enter your 10 digit mobile number' {...register('mobile_number', { required: true })} className="input text-black input-bordered input-info" />
                            {errors.mobile_number && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">School/College</span>
                            </label>
                            <input type="text" placeholder='Enter Your School/College Name' {...register('school', { required: true })} className="input text-black input-bordered input-info" />
                            {errors.school && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Experience</span>
                            </label>

                            <textarea placeholder='Share Your Experience...' {...register('experience', { required: true })} className="textarea text-black textarea-bordered textarea-info" />
                            {errors.experience && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">You can check out the portfolio matrix spreadsheet <Link className='text-blue-600 underline' target='_blank' href={'https://docs.google.com/spreadsheets/d/1r-ocW42d5FlkLIcH08HdjwZfu72qMeGn/edit?usp=sharing&ouid=104175915886779130478&rtpof=true&sd=true'}>here</Link> </span>
                            </label>

                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio First Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-info text-black'  {...register('portfolio_first', { required: true })}>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option
                                            key={item.id}
                                            value={`${item.name} ${item.portfolio ? `${item.portfolio}` : null}`}
                                            disabled={selectedOptions.second === item.name || selectedOptions.third === item.name}
                                        >{item.name} {item.portfolio ? `${item.portfolio}` : null}</option>
                                    ))
                                }
                            </select>
                            {errors.portfolio_first && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio Second Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-info text-black'  {...register('portfolio_second', { required: true })}>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option
                                            key={item.id}
                                            value={`${item.name} ${item.portfolio ? `${item.portfolio}` : null}`}
                                            disabled={selectedOptions.first === item.name || selectedOptions.third === item.name}
                                        >{item.name} {item.portfolio ? `${item.portfolio}` : null}</option>
                                    ))
                                }
                            </select>
                            {errors.portfolio_second && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio Third Preference</span>
                            </label>
                            <select className='select select-bordered w-full select-info text-black'  {...register('portfolio_third', { required: true })}>
                                <option>Select Your Preference</option>
                                {
                                    loksabha.map((item: any) => (
                                        <option
                                            key={item.id}
                                            value={`${item.name} ${item.portfolio ? `${item.portfolio}` : null}`}
                                            disabled={selectedOptions.first === item.name || selectedOptions.second === item.name}
                                        >{item.name} {item.portfolio ? `${item.portfolio}` : null}</option>
                                    ))
                                }
                            </select>
                            {errors.portfolio_third && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Referral Code</span>
                            </label>
                            <input type="text" placeholder='Referral Code' {...register('referral_code')} className="input text-black input-bordered input-info" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pay total sum of <span className='font-black'>Rs. {amount}
                                </span> </span>
                            </label>
                            <div className='flex mb-2 justify-center'>
                                <Image src={qr} width={300} alt='UPI QR tag'></Image>
                            </div>
                            <input type="text" placeholder='Enter Transaction Id' {...register('utr', { required: true })} className="input text-black input-bordered input-info" />
                            {errors.utr && <span className="text-red-500 mt-1 text-sm">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <button type="submit" disabled={loading} className="btn btn-neutral mt-3">{
                                loading ? 'Processing...' : 'Submit'

                            }</button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">For Payment or form related issue, contact on +91 93344 16542</span>
                            </label>

                            
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PortfolioForm
