import { CityList } from "@/entities/city";
import { CityForm } from "@/features/city-form";
import { Container } from "@/shared/ui";

export const WeatherPage = () => {
  return (
    <Container>
      WeatherPage
      <CityForm />
      <CityList />
    </Container>
  );
};
