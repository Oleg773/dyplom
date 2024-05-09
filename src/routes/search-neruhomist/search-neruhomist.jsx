import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainContainer from '../../components/main-container/main-container';
import './search-neruhomist.css';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import CardsNeruhomist from '../../components/neruhomist/cards-neruhomist/cards-neruhomist';
import Container from '../../components/container/container';
import RecomendedNeruhomist from '../../components/neruhomist/recomended-neruhomist/recomended-neruhomist';
import CategoriesList from '../../components/neruhomist/categories-list/categories-list';
import LocationsList from '../../components/neruhomist/locations-list/locations-list';
import { useEffect, useState } from 'react';
import { getNeruhomostiBySearch } from '../../api/main';
import SearchForm from '../../components/search-form/search-from';

export default function SearchNeruhomist() {
  const [searchParams] = useSearchParams();
  const [neruhomosti, setNeruhomosti] = useState([]);

  useEffect(() => {
    const searchData = {
      'key-word': searchParams.get('key-word'),
      place: searchParams.get('place'),
      distance: searchParams.get('distance'),
      city: searchParams.get('city'),
      type: searchParams.get('type'),
      status: searchParams.get('status'),
    };

    setNeruhomosti(getNeruhomostiBySearch(searchData));
  }, [searchParams]);

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
                { name: 'Результат пошуку' },
              ]}
            />

            <h2>Результат пошуку</h2>

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
