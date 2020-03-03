import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import Container from '../../components/Container';
import { Form, SubmitButton, List, InputRepo } from './styles';

import api from '../../services/api';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
      notFoundRepo: false,
    };
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) this.setState({ repositories: JSON.parse(repositories) });
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories === repositories) return 0;

    localStorage.setItem('repositories', JSON.stringify(repositories));
    return 1;
  }

  existsRepo = repoName => {
    const { repositories } = this.state;

    const repo = repositories.find(r => r.name === repoName);

    return repo != null;
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, notFoundRepo: false });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { newRepo, repositories } = this.state;
      this.setState({ loading: true });

      if (this.existsRepo(newRepo)) throw new Error('Repositório duplicado');

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch (error) {
      this.setState({ notFoundRepo: true, loading: false });
    }
  };

  render() {
    const { newRepo, loading, repositories, notFoundRepo } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <InputRepo
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
            error={notFoundRepo ? 1 : 0}
          />

          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(rep => (
            <li key={rep.name}>
              {rep.name}
              <Link to={`/repository/${encodeURIComponent(rep.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
