import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import {
  ContainerModal,
  CardEdit,
  Input,
  Icon,
  Button,
  WrapperEdit,
  WrapperButton,
} from '../EditScreen/styles';
import { Card, Icons, Img, UpSide, UnderSide, Wrapper } from './styles';
import api from '../../services/api';
import './modalStyles.css';

export interface ICard {
  id: string;
  pais: string;
  local: string;
  url: string;
  meta: string;
}

export interface IUpdated {
  local: string;
  meta: string;
}

const CardTemplate: React.FC<ICard> = ({
  id,
  pais,
  local,
  url,
  meta,
}: ICard) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [placeState, setPlaceState] = useState(local);
  const [goalState, setGoalState] = useState(meta);

  const handleEdit = async (
    cardId: string,
    newPlace: string,
    newGoal: string,
  ) => {
    const updatedData: IUpdated = {
      local: newPlace,
      meta: newGoal,
    };

    await api.put(`places/${cardId}`, updatedData);
  };

  const handleRemove = async (cardId: string) => {
    await api.delete(`places/${cardId}`);
    window.location.reload();
  };

  return (
    <>
      <Card>
        <UpSide>
          <Img src={url} alt="flag" />
          <Icons>
            <EditIcon
              style={{ fontSize: 23 }}
              onClick={() => setModalIsOpen(true)}
            />
            <ClearIcon
              style={{ fontSize: 23 }}
              onClick={() => handleRemove(id)}
            />
          </Icons>
          <h2>{pais}</h2>
        </UpSide>
        <UnderSide>
          <Wrapper>
            <span>Local: {local}</span>
            <span>Meta: {meta}</span>
          </Wrapper>
        </UnderSide>
      </Card>

      <Modal className="modalStyles" isOpen={modalIsOpen}>
        <ContainerModal>
          <CardEdit>
            <UpSide>
              <Img src={url} alt="flag" />
              <Icon>
                <ClearIcon
                  style={{ fontSize: 23 }}
                  onClick={() => setModalIsOpen(false)}
                />
              </Icon>
              <h2>{pais}</h2>
            </UpSide>
            <UnderSide>
              <form onSubmit={() => handleEdit(id, placeState, goalState)}>
                <WrapperEdit>
                  <label>Local: </label>
                  <Input
                    type="text"
                    placeholder={placeState}
                    value={placeState}
                    onChange={(event) => setPlaceState(event.target.value)}
                  />
                  <br />
                  <br />
                  <label>Meta: </label>
                  <InputMask
                    className="goalInputMask"
                    name="Goal"
                    mask="99/9999"
                    placeholder={meta}
                    onChange={(event) => setGoalState(event.target.value)}
                  />
                </WrapperEdit>
                <WrapperButton>
                  <Button type="submit">Editar</Button>
                </WrapperButton>
              </form>
            </UnderSide>
          </CardEdit>
        </ContainerModal>
      </Modal>
    </>
  );
};

export default CardTemplate;
