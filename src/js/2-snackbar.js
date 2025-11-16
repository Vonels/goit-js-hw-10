import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const { delay, state } = e.currentTarget.elements;

  const delayValue = Number(delay.value);
  const shouldResolve = state.value === 'fulfilled';

  createPromise(1, delayValue, shouldResolve)
    .then(({ delay }) => {
      iziToast.success({
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(({ delay }) => {
      iziToast.error({
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });

  form.reset();
});

function createPromise(position, delay, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { position, delay };
      shouldResolve ? resolve(data) : reject(data);
    }, delay);
  });
}
