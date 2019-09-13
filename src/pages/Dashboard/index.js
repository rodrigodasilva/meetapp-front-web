import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from 'react-icons/fa';
import { Spinner } from 'react-activity';
import ReactTooltip from 'react-tooltip';

import {
  requestDetailsMeetup,
  clearMeetup,
} from '~/store/modules/meetup/actions';

import { setCurrentPage } from '~/store/modules/currentPage/action';

import {
  Container,
  Meetup,
  ContainerMeetups,
  ContainerEmpty,
  Pagination,
} from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [checkIfIsEndPage, setCheckIfIsLastPage] = useState(false);
  const [lastPage, setLastPage] = useState();

  const dispatch = useDispatch();

  dispatch(clearMeetup());

  dispatch(setCurrentPage('Dashboard'));

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
  }, [checkIfIsEndPage, loading, page]);

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
      <header>
        <h1>Meus meetups</h1>
        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline size={20} color="#fff" />
            <span>Novo &nbsp;</span> <span> meetup</span>
          </button>
        </Link>
      </header>

      {loading && (
        <ContainerEmpty>
          <Spinner size={25} color="#F94D6A" />
        </ContainerEmpty>
      )}

      {meetups.length >= 1 && !loading && (
        <ContainerMeetups>
          <ul>
            {meetups.map(meetup => (
              <Meetup key={meetup.id} past={meetup.past}>
                <strong>{meetup.title}</strong>

                <div>
                  <span>{meetup.dateFormatted}</span>
                  <button onClick={() => handleDetails(meetup)} type="button">
                    <MdChevronRight size={28} color="#fff" />
                  </button>
                </div>
              </Meetup>
            ))}
          </ul>
        </ContainerMeetups>
      )}

      {meetups.length === 0 && !loading && (
        <ContainerEmpty>
          <h1>Nenhum meetup cadastrado!</h1>
        </ContainerEmpty>
      )}

      <Pagination>
        <button type="button" disabled={page < 2} onClick={() => setPage(1)}>
          <p data-tip="Start" data-for="start">
            <FaAngleDoubleLeft size={25} />
          </p>
          <ReactTooltip place="left" type="light" effect="solid" id="start" />
        </button>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePrevPage()}
        >
          <p data-tip="Previous" data-for="previous">
            <FaAngleLeft size={25} />
          </p>
          <ReactTooltip place="top" type="light" effect="solid" id="previous" />
        </button>

        <span>Page {page}</span>

        <button
          type="button"
          disabled={checkIfIsEndPage}
          onClick={() => handleNextPage()}
        >
          <p data-tip="Next" data-for="next">
            <FaAngleRight size={25} />
          </p>
          <ReactTooltip place="top" type="light" effect="solid" id="next" />
        </button>
        <button
          type="button"
          disabled={checkIfIsEndPage}
          onClick={() => setPage(lastPage)}
        >
          <p data-tip="Last" data-for="last">
            <FaAngleDoubleRight size={25} />
          </p>
          <ReactTooltip place="right" type="light" effect="solid" id="last" />
        </button>
      </Pagination>
    </Container>
  );
}
