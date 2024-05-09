import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainContainer from '../../components/main-container/main-container';
import CardsNeruhomist from '../../components/neruhomist/cards-neruhomist/cards-neruhomist';
import './city-neruhomist.css';
import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import { neruhomistLocationMap } from '../../api/data';
import Container from '../../components/container/container';
import RecomendedNeruhomist from '../../components/neruhomist/recomended-neruhomist/recomended-neruhomist';
import CategoriesList from '../../components/neruhomist/categories-list/categories-list';
import LocationsList from '../../components/neruhomist/locations-list/locations-list';
import { getNeruhomostiByLocation } from '../../api/main';
import SearchForm from '../../components/search-form/search-from';

export default function CityNeruhomist() {
  const { location } = useParams();
  const [neruhomosti, setNeruhomosti] = useState([]);

  useEffect(() => {
    setNeruhomosti(getNeruhomostiByLocation(location));
  }, [location]);

  return (
    <>
      <Header />
      <MainContainer>
        <SearchForm />
        <div className="container-2columns">
          <div>
            <Breadcrumb
              items={[
                { link: `/`, name: 'Головна' },
                { name: neruhomistLocationMap[location] },
              ]}
            />

            <h2>{neruhomistLocationMap[location]}</h2>

            <CardsNeruhomist
              neruhomosti={neruhomosti}
              defaultLayout="list"
              showDetails={true}
            />
          </div>

          <div>
            <Container>
              <h3>Рекомендовані</h3>
              <RecomendedNeruhomist />
            </Container>
            <Container>
              <h3>Категорії</h3>
              <CategoriesList />
            </Container>
            <Container>
              <h3>Місця</h3>
              <LocationsList />
            </Container>
          </div>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
}
