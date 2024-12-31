import useApi from '../../../composables/useApi';

import { api } from '../../../boot/axios';
import { Notify } from 'quasar';

export default function Service(url) {
  const { index, post, update, destroy } = useApi(url);

  const games = async () => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (err) {
      Notify.create({
        type: 'negative',
        message: 'Erro ao buscar os itens.',
        progress: true,
      });
      return Promise.reject(err);
    }
  };

  return {
    games,
    post,
    index,
    update,
    destroy
  };
}
