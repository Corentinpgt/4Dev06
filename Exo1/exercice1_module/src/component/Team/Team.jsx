import Card from "../Card/Card";
import style from "./team.module.css";

function Team(team) {
  let employees = team.employees.map((employee) => {
    // console.log(index);
    return (
      <li key={employee.id} className={style.team__galleryItem}>
        <Card
          image={employee.image}
          title={employee.title}
          subtitle={employee.subtitle}
        />
      </li>
    );
  });
  return (
    <section className={style.team}>
      <header className={style.team__header}>
        <h2 className={style.team__title}>{team.title}</h2>
        <h1 className={style.team__heading}>{team.heading}</h1>
      </header>
      <div className={style.team__content}>
        <p className={style.team__description}> {team.description}</p>
        <ul className={style.team__gallery}>{employees}</ul>
      </div>
    </section>
  );
}

export default Team;
