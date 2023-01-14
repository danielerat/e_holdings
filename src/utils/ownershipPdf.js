import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// var dd = {
//   content: [
//     {
//       stack: [
//         "July-22-2023",
//         { text: "This is a subheader", style: "subheader" },
//       ],
//       style: "date",
//     },
//     {
//       stack: [
//         "Proof of Ownership Document",
//         { text: "This is a subheader", style: "subheader" },
//       ],
//       style: "mainTitle",
//     },
//     {
//       text: [
//         "I, ",
//         { text: "Mumbere Carlos", italics: true, bold: true },
//         " National ID ",
//         { text: "199212198243435", italics: true, bold: true },
//         'Residing In Kigali, Nyarugenge ,Nyarugenge,Agatare and phone number: 0784444345 , hereafter called "Buyer", intend to purchase the used electrical or electronic equipment from , and the SELLER likewise intends to sell such equipment to James Harden with Identity or Passport number: 1992121982 . Residing In Kigali, Nyarugenge ,Nyarugenge,Agatare and phone number: 0784444345 "Seller", we parties agree to the the transaction of the following Device:',
//       ],
//       style: "main",
//     },
//     {
//       text: "This paragraph (consisting of a single line) directly sets top and bottom margin to 20",
//       margin: [0, 20],
//     },
//     {
//       stack: [
//         {
//           text: [
//             "This line begins a stack of paragraphs. The whole stack uses a ",
//             { text: "superMargin", italics: true },
//             " style (with margin and fontSize properties).",
//           ],
//         },
//         {
//           text: [
//             "When you look at the",
//             { text: " document definition", italics: true },
//             ", you will notice that fontSize is inherited by all paragraphs inside the stack.",
//           ],
//         },
//         "Margin however is only applied once (to the whole stack).",
//       ],
//       style: "superMargin",
//     },
//     {
//       stack: [
//         "I'm not sure yet if this is the desired behavior. I find it a better approach however. One thing to be considered in the future is an explicit layout property called inheritMargin which could opt-in the inheritance.\n\n",
//         {
//           fontSize: 15,
//           text: [
//             "Currently margins for ",
//             /* the following margin definition doesn't change anything */
//             { text: "inlines", margin: 20 },
//             " are ignored\n\n",
//           ],
//         },
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n",
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n",
//       ],
//       margin: [0, 20, 0, 0],
//       alignment: "justify",
//     },
//   ],
//   styles: {
//     date: {
//       fontSize: 18,
//       bold: true,
//       alignment: "right",
//       margin: [0, 0, 0, 100],
//     },
//     mainTitle: {
//       fontSize: 18,
//       bold: true,
//       alignment: "center",
//       underline: true,
//       margin: [0, 0, 0, 80],
//     },
//     main: {
//       fontSize: 17,
//     },

//     subheader: {
//       fontSize: 14,
//     },
//     superMargin: {
//       margin: [20, 0, 40, 0],
//       fontSize: 15,
//     },
//   },
// };
function ownershipPdf() {
  let docDefinition = {
    content: [
      {
        stack: [
          "This header has both top and bottom margins defined",
          { text: "This is a subheader", style: "subheader" },
        ],
        style: "header",
      },
      "First paragraph",
      "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
    ],
  };
  const pdf = pdfMake.createPdf(docDefinition);
  pdf.open();
}
export default ownershipPdf;
