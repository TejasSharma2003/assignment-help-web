import ExpertsBanner from "@/components/experts/experts-banner";
import Experts from "@/components/experts/experts";
import Faq from "@/components/home/faq";
import MainNavbar from "@/components/main-navbar";
import Footer from "@/components/site-footer";
import Testimonial from "@/components/home/testimonial";

export default function ExpertsPage() {
    const faqs = [
        {
            "question": "How do I choose the right expert for my assignment?",
            "answer": "You can browse through our 'Experts' page and review the profiles to find an expert whose qualifications and areas of expertise match the requirements of your assignment. If you need further assistance, feel free to reach out to our support team, and they'll help you make the right choice."
        },
        {
            "question": "What subjects do your experts cover?",
            "answer": "Our team of experts covers a wide range of subjects, including but not limited to Mathematics, Statistics, Computer Science, Economics, Literature, and Humanities. You can find detailed information about each expert's areas of expertise on their individual profiles."
        },
        {
            "question": "How does the assignment help process work?",
            "answer": "To get assignment help, simply submit your requirements through our user-friendly platform. You'll be matched with an expert who is best suited to assist you. The expert will then work on your assignment, providing you with updates and clarifications if needed. Once completed, you'll receive the finished assignment before the deadline."
        },
        {
            "question": "Is my personal information kept confidential?",
            "answer": "Yes, we take the privacy and security of your personal information seriously. All communication and data shared on our platform are encrypted and kept confidential. We adhere to strict privacy policies to ensure the safety of your information."
        },
        {
            "question": "What if I'm not satisfied with the assignment help?",
            "answer": "Customer satisfaction is our priority. If you're not satisfied with the assignment assistance provided, please contact our support team. We'll work closely with you to understand your concerns and make the necessary adjustments or, if required, connect you with a different expert."
        }
    ]

    return (
        <>
            <ExpertsBanner />
            <Experts />
            <Testimonial/>
            <Faq faqs={faqs} />
        </>
    )
}
