import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PositionCard from "@/components/PositionCard";

export default function MyPostulaciones() {
  return (
    <>
      <Header
        title="Postulaciones de Trabajo"
        subtitle="Conoce más sobre nuestras oportunidades de empleo."
        backgroundClass="bg-hero-postulaciones"
      />
      <Layout>
        <div className="max-w-4xl mx-auto mt-10 space-y-4">
          <PositionCard
            title="Desarrollo Front-End"
            description="Tecnica y Proyectos S.A."
            progress={80} // Suponiendo que el progreso es del 75%
          />
          <PositionCard
            title="Desarrollo Back-End Junior"
            description="Tecnica y Proyectos S.A."
            progress={20} // Suponiendo que el progreso es del 50%
          />
        </div>
      </Layout>
    </>
  );
}
