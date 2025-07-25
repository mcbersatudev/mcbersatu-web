import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { helpSection as faqs } from '@/data/pages';

export function FaqSection() {
    return (
        <div className="w-full md:w-[80%] lg:max-2xl:w-[60%]">
            <Accordion type="single" defaultValue={faqs[0].value}>
                {faqs.map((faq, faqIdx) => (
                    <AccordionItem key={faqIdx} value={faq.value}>
                        <AccordionTrigger className="cursor-pointer text-lg font-bold text-pretty hover:no-underline">{faq.title}</AccordionTrigger>
                        <AccordionContent className="pr-10 text-justify">{faq.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
