import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronRight } from 'react-icons/md';
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from 'react-icons/fa';
import { Spinner } from 'react-activity';

import {
  requestDetailsMeetup,
  clearMeetup,
} from '~/store/modules/meetup/actions';

import {
  Container,
  Header,
  LinkAdd,
  ButtonAdd,
  CardMeetup,
  ContainerMeetups,
  ContainerEmpty,
  Pagination,
  ButtonPagination,
} from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [checkIfIsLastPage, setCheckIfIsLastPage] = useState(false);
  const [lastPage, setLastPage] = useState();

  const dispatch = useDispatch();

  dispatch(clearMeetup());

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`organizing`, {
        params: {
          page,
        },
      });

      const data = response.data.rows.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd ' de ' MMMM ', às ' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      }));

      const countMeetups = response.data.count;
      const perPage = 5;
      const totalPages = countMeetups / perPage;

      if (Number.isInteger(totalPages)) {
        setCheckIfIsLastPage(totalPages === page);
        setLastPage(totalPages);
      } else {
        setCheckIfIsLastPage(Math.trunc(totalPages + 1) === page);
        setLastPage(Math.trunc(totalPages + 1));
      }

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, [checkIfIsLastPage, loading, page]);

  function handlePrevPage() {
    setPage(page > 1 ? page - 1 : 1);
    setLoading(true);
  }

  function handleNextPage() {
    setPage(page + 1);
    setLoading(true);
  }

  function handleDetails(meetup) {
    dispatch(requestDetailsMeetup(meetup));
  }

  return (
    <Container>
      <Header>
        <h1>Meus meetups</h1>
        <LinkAdd to="/meetup/new">
          <ButtonAdd type="button">
            <span>Novo meetup</span>
          </ButtonAdd>
        </LinkAdd>
      </Header>

      {loading && (
        <ContainerEmpty>
          <Spinner size={25} color="#F94D6A" />
        </ContainerEmpty>
      )}

      {meetups.length >= 1 && !loading && (
        <ContainerMeetups>
          {meetups.map(meetup => (
            <CardMeetup key={meetup.id} past={meetup.past}>
              <strong className="title">{meetup.title}</strong>

              <span className="date">{meetup.dateFormatted}</span>

              <button
                onClick={() => handleDetails(meetup)}
                type="button"
                className="btnDetails"
              >
                <MdChevronRight size={35} color="#fff" />
              </button>
            </CardMeetup>
          ))}
        </ContainerMeetups>
      )}

      {meetups.length === 0 && !loading && (
        <ContainerEmpty>
          <h1>Nenhum meetup cadastrado</h1>
        </ContainerEmpty>
      )}

      <Pagination>
        <ButtonPagination
          type="button"
          disabled={page < 2}
          onClick={() => setPage(1)}
        >
          <FaAngleDoubleLeft size={25} />
        </ButtonPagination>
        <ButtonPagination
          type="button"
          disabled={page < 2}
          onClick={() => handlePrevPage()}
        >
          <FaAngleLeft size={25} />
        </ButtonPagination>

        <div className="pageDescription">
          <span className="pageName">Page&nbsp;</span>
          <span>{page}</span>
        </div>

        <ButtonPagination
          type="button"
          disabled={checkIfIsLastPage || meetups.length === 0}
          onClick={() => handleNextPage()}
        >
          <FaAngleRight size={25} />
        </ButtonPagination>
        <ButtonPagination
          type="button"
          disabled={checkIfIsLastPage || meetups.length === 0}
          onClick={() => setPage(lastPage)}
        >
          <FaAngleDoubleRight size={25} />
        </ButtonPagination>
      </Pagination>
    </Container>
  );
}
