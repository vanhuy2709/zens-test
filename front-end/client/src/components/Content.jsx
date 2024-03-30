import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Spin } from 'antd';
import Cookies from 'js-cookie';

// Import Actions
import { getAllJoke } from '../store/actions/apiRequest.action';
import {
  handleVoteJoke
} from '../store/actions/submit.action';

const Content = () => {
  const [cookieValue, setCookieValue] = useState();
  const dispatch = useDispatch();
  const { pending, jokeContent } = useSelector(reduxData => reduxData.jokeReducer);

  const handleReset = () => {
    Cookies.remove('vote');
    window.location.reload();
  }

  // Fetch Data List Joke
  useEffect(() => {
    dispatch(getAllJoke());
  }, [])

  // Get Cookie
  useEffect(() => {
    const voteCookie = Cookies.get('vote');
    setCookieValue(voteCookie);
  }, []);

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="py-8 lg:py-12 px-6 sm:px-10 lg:px-32">
          {pending ?
            (
              <div className="text-center">
                <Spin />
              </div>
            )
            :
            (
              <div className="text-[#5E5E5E] text-sm sm:text-xl">
                {
                  jokeContent?.content ??
                  <p className="text-center">
                    That's all the jokes for today! Come back another day!
                  </p>
                }
              </div>
            )}
        </div>

        <hr className="w-1/2 mb-4 md:mb-10 mx-auto" />

        <div className="flex justify-center gap-6 px-4">
          {
            jokeContent?.content ?
              (
                <>
                  <button
                    className="bg-[#2C7EDB] text-white px-6 sm:px-16 py-4"
                    onClick={() => dispatch(handleVoteJoke(jokeContent._id, 'Yes'))}
                  >
                    This is Funny!
                  </button>
                  <button
                    className="bg-[#29B363] text-white px-4 sm:px-12 py-4"
                    onClick={() => dispatch(handleVoteJoke(jokeContent._id, 'No'))}
                  >
                    This is not funny.
                  </button>
                </>
              )
              :
              (
                <button
                  className="bg-[#29B363] text-white px-4 sm:px-12 py-4"
                  onClick={() => handleReset()}
                >
                  Vote again
                </button>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Content;