import Team from "./component/Team/Team";

export default function App() {
  let data = {
    title: "Notre équipe",
    heading: "Présentation de notre équipe formidable",
    description:
      "Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.",
    employees: [
      {
        id: 1,
        image: "/edouard.jpg",
        title: "Pierre Durand",
        subtitle: "Responsable de la gestion locative",
      },
      {
        id: 2,
        image: "/amelie.avif",
        title: "Sophie Lefevre",
        subtitle: "Responsable de la communication",
      },
      {
        id: 3,
        image: "/gilles.jpg",
        title: "Gilles Damien",
        subtitle: "Directeur commercial",
      },
    ],
  };

  return (
    <>
      <Team {...data} />
    </>
  );
}
