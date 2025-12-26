import LogoLoop from "@/components/reactBits/LoopSlider"
import BenefitsSliderComponent from "./BenefitsSliderComponent"

const benefitsComponents = [
    {
        node: (
            <BenefitsSliderComponent
                title="Enhanced Engagement, Tangible Results"
                desc="Leveraging our expertise and guidance, we ensure an exceptional user experience and robust engagement right from the outset. We stand by you, assisting in the measurement and monitoring of learning engagement success at every phase of your journey."
            ><svg _ngcontent-ng-c4077394142="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14"><path _ngcontent-ng-c4077394142="" strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg></BenefitsSliderComponent>
        )
    },
    {
        node: (
            <BenefitsSliderComponent
                title="Future-Ready Scalability"
                desc="Is your organization poised for growth? Do you have ambitious plans for the future of your learning strategy? Our learning solution is poised to scale alongside you, ensuring your options remain future-proof."
            ><svg _ngcontent-ng-c4077394142="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14"><path _ngcontent-ng-c4077394142="" strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"></path></svg></BenefitsSliderComponent>
        )
    },
    {
        node: (
            <BenefitsSliderComponent
                title="Tailored Solution for Solid ROI"
                desc="From the very beginning, we grasp your objectives and learning strategy, collaborating closely to transform them into reality. By eliminating uncertainties, we can start showcasing ROI from day one, delivering a product that perfectly aligns with your needs."
            ><svg _ngcontent-ng-c4077394142="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14"><path _ngcontent-ng-c4077394142="" strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"></path></svg></BenefitsSliderComponent>
        )
    },
    {
        node: (
            <BenefitsSliderComponent
                title="Round-the-Clock Support, Ever-Ready Assistance"
                desc="Access assistance whenever you require it, whether from your dedicated Learning Solution Partner, our 24/7 support team, data scientists, or design experts. We're the reliable hands you can count on."
            ><svg _ngcontent-ng-c4077394142="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14"><path _ngcontent-ng-c4077394142="" strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"></path></svg></BenefitsSliderComponent>
        )
    },
    {
        node: (
            <BenefitsSliderComponent
                title="Seamless Integration, Streamlined Management"
                desc="Bid farewell to the complexities of procuring and managing multiple systems from various providers, each with its own pricing models and currencies. Reclaim your time and simplify your life with a single, integrated provider."
            ><svg _ngcontent-ng-c4077394142="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14"><path _ngcontent-ng-c4077394142="" strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path><path _ngcontent-ng-c4077394142="" strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg></BenefitsSliderComponent>
        )
    },
    {
        node: (
            <BenefitsSliderComponent
                title="Transparent Pricing, No Hidden Charges"
                desc="Our straightforward pricing model guarantees a hassle-free process, devoid of unexpected add-on expenses. We're here to help you trim costs and amplify the flexibility of your choices."
            ><svg _ngcontent-ng-c4077394142="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-14"><path _ngcontent-ng-c4077394142="" strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"></path></svg></BenefitsSliderComponent>
        )
    },
]
const Benefits = () => {
    return (
        <section>
            <div className="container pt-10 pb-5">
                <h2 className="text-3xl font-bold pb-4 gradient-text-color text-start!">BENEFITS</h2>
            </div>
            <div className="w-full bg-transparent flex relative overflow-hidden">
                <LogoLoop
                    logos={benefitsComponents}
                    speed={50}
                    direction="right"
                    logoHeight={10}
                    gap={40}
                    pauseOnHover
                    fadeOut
                />
            </div>

            <div className="mx-auto px-3 text-center my-10 flex flex-col gap-4 max-w-150">
                <h4 className="text-xl font-semibold">READY TO TAKE THE NEXT STEP?</h4>
                <p className="text-white/60 text-xl">Book a discovery call with us to delve into your requirements. Together, we can uncover how our comprehensive learning solution and steadfast partnership will enhance your workforce and organization.</p>
            </div>
        </section>
    )
}

export default Benefits