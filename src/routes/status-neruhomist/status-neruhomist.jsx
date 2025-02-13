import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MainContainer from '../../components/main-container/main-container';
import CardsNeruhomist from '../../components/neruhomist/cards-neruhomist/cards-neruhomist';
import './status-neruhomist.css';
import { useEffect, useState } from 'react';
import { getNeruhomostiByStatus } from '../../api/main';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import { neruhomistStatusMap } from '../../api/data';
import Container from '../../components/container/container';
import RecomendedNeruhomist from '../../components/neruhomist/recomended-neruhomist/recomended-neruhomist';
import CategoriesList from '../../components/neruhomist/categories-list/categories-list';
import LocationsList from '../../components/neruhomist/locations-list/locations-list';
import SearchForm from '../../components/search-form/search-from';

export default function StatusNeruhomist() {
  const { status } = useParams();
  const [neruhomosti, setNeruhomosti] = useState([]);

  useEffect(() => {
    setNeruhomosti(getNeruhomostiByStatus(status));
  }, [status]);

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
                { name: neruhomistStatusMap[status] },
              ]}
            />

            <h2>{neruhomistStatusMap[status]}</h2>

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
