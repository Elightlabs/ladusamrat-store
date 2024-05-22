"use client"
import { Pacifico, Nunito } from "next/font/google";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] , fallback: ["Arial", "Times New Roman"],})

const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] , fallback: ["Arial", "Times New Roman"],})

const AboutSection = () => {
    return (
        <> <div className="h-[3px]  my-[5%] w-full bg-gradient-to-r from-transparent via-[#C21C20] to-transparent">
        </div>
            <div className="flex flex-col lg:flex-row px-[5%] justify-center items-center">
                <div className="w-full lg:w-1/2 lg:block">
                    <img src="Assets/logo-marathi.png" />
                </div>
                <div className="lg:w-[50%] w-full  text-center flex flex-col">
                    <h2 className={pacifico.className + " text-3xl text-center p-[5%] lg:text-5xl text-[#C21C20]"}>
                        Who we are
                    </h2>
                    <p className={nunito.className+"  font-normal text-left"}>
                    &quot;उत्कृष्टतेची स्वादिष्ट परंपरा&quot; 1967 सालापासून आमच्या हृदयाच्या व हातांच्या जवळ असलेला हा मंत्र आम्ही जे काही शिजवतो त्यामध्ये कायम असलेला एक गुप्त घटक आहे. परिणामी, मुंबई लाडू सम्राट लालबाग आणि जगभरातील असंख्य खवय्यांसाठी एक पक्का प्रियकर बनला आहे. आम्ही अनेक महाराष्ट्रीयन पदार्थांमध्ये माहिर आहोत ज्यामध्ये बटाटा वडा हा आमचा यूएसपी आहे आणि इतर अनेक अस्सल महाराष्ट्रीयन स्नॅक्स, उपवासाचे पदार्थ व मिठाई आणि नमकीन उत्पादनाची विस्तृत श्रेणी देखील आहे. कृतज्ञता आणि कळकळीने आम्ही तुम्हाला आमच्यासोबत आमच्या उत्कृष्टतेची स्वादिष्ट परंपरा साजरी करण्यासाठी आमंत्रित करतो.
                    </p>
                </div>
            </div>
        </>
    )
}
export default AboutSection;