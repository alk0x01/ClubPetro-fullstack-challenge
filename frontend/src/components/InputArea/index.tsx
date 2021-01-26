/* eslint-disable prefer-template */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import CardTemplate, { ICard } from '../CardTemplate/index';
import {
  Container,
  Form,
  Country,
  Place,
  Button,
  ContainerCards,
} from './styles';
import './stylesInputMask.css';
import apiRestCountries from '../../services/rest-countries-api';
import api from '../../services/api';

interface Countries {
  id: number;
  name: string;
  flag: string;
}

const Landing: React.FC = () => {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [cards, setCards] = useState<ICard[]>([]);

  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [flag, setFlag] = useState('');
  const [goal, setGoal] = useState('');

  useEffect(() => {
    apiRestCountries.get('/').then((response) => {
      const allCountries = response.data.map(
        (country: {
          translations: { br: string };
          flag: { flag: string };
          callingCodes: { id: number };
        }) => {
          return {
            name: country.translations.br,
            flag: country.flag,
          };
        },
      );

      setCountries(allCountries);
    });
  }, []);

  useEffect(() => {
    api.get('/places').then(async (response) => {
      const allCards = response.data;

      if (allCards) {
        setCards(allCards);
      } else console.log('Have no cards');
    });
  }, []);

  const handleOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const array = event.target.value.split(',');

    const selectedName = array[0];
    const selectedFlag = array[1];

    setName(selectedName);
    setFlag(selectedFlag);
  };

  const handleSubmit = async () => {
    const data = {
      pais: name,
      local: place,
      url: flag,
      meta: goal,
    };

    let allDataFilled = false;

    if (name && place && flag && goal) {
      allDataFilled = true;
    }

    let checkCardExist = false;

    cards.map((card) => {
      if (card.pais === data.pais) {
        if (card.local === data.local) {
          checkCardExist = true;
        }
      }
    });

    if (allDataFilled === true) {
      if (checkCardExist === false) {
        await api.post('/places', data);
      } else {
        alert(
          'Ops! Parece que você já adicionou um cartão com esse país e local...',
        );
      }
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <label>País</label>
          <Country
            placeholder="Selecione..."
            onChange={(event) => handleOption(event)}
            defaultValue=""
          >
            <option value="" disabled>
              Selecione...
            </option>
            {countries.map((country) => {
              return [
                <option key={country.id} value={[country.name, country.flag]}>
                  {country.name}
                </option>,
              ];
            })}
          </Country>
        </Container>

        <Container>
          <label>Local</label>
          <Place
            name="Place"
            type="text"
            value={place}
            placeholder="Digite o local que deseja conhecer"
            onChange={(event) => setPlace(event.target.value)}
          />
        </Container>

        <Container>
          <label>Meta</label>
          <InputMask
            className="GoalInputMask"
            name="Goal"
            mask="99/9999"
            value={goal}
            placeholder="mês/ano"
            onChange={(event) => setGoal(event.target.value)}
          />
        </Container>

        <Container>
          <Button type="submit">Adicionar</Button>
        </Container>
      </Form>
      <ContainerCards>
        {cards.map((card) => {
          return (
            <CardTemplate
              id={card.id}
              pais={card.pais}
              local={card.local}
              url={card.url}
              meta={card.meta}
            />
          );
        })}
      </ContainerCards>
    </>
  );
};

export default Landing;
