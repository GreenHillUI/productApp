import { lazy, React } from 'react';

const Overview = lazy(() => import('./overview/Overview'));
const QuestionList = lazy(() => import('./QuestionList'));
const RelatedProducts = lazy(() => import('./RelatedProducts'));
const Ratings = lazy(() => import('./Ratings'));
const Setter = lazy(() => import('./Setter'));
const Navbar = lazy(() => import('./navbar/Navbar'));

//NOTE: Should only have containers rendered inside, using QuestionList
//component temporarily, will change either when done with CSS or when container is built

function App() {
  return (
    <>
      <Navbar />
      <Setter />
      <Overview />
      <RelatedProducts />
      <QuestionList />
      <Ratings />
    </>
  );
}

export default App;
