import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 'f5hj1',
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: 'bv5vjm6',
      label: "Can I use JavaScript on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
    {
      id: 'jbv2iofg2',
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
