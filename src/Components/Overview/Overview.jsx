import React from 'react'
import { BiSolidStar, BiSolidStarHalf } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

const Overview = () => {
  return (
    <div className=' flex flex-col md:flex-row gap-10'>
      <div className='text-left md:w-2/3'>
        <div className='mb-4'>
          <h3 className='text-2xl font-semibold'>
            Twin Cot with 2 Mattresses for Twins, Solid Wood, White, 120 x 120 cm
          </h3>
        </div>
        <div className='flex items-center gap-3 mb-6'>
          <div className='flex space-x-1'>
            <BiSolidStar size={13} />
            <BiSolidStar size={13} />
            <BiSolidStar size={13} />
            <BiSolidStar size={13} />
            <BiSolidStarHalf size={13} />
          </div>
          <p className='text-sm'>4.5/152 Rating</p>
          <p className='text-sm'>32 Reviews</p>
          <p className='text-sm'>24 Answered Questions</p>
        </div>
        <div className='flex flex-col mb-6'>
          <table className='w-full md:w-[500px]'>
            <tbody>
              <tr className='h-12'>
                <td>Color</td>
                <td>Wood color</td>
              </tr>
              <tr className='h-12'>
                <td>Brand</td>
                <td>Micoland</td>
              </tr>
              <tr className='h-12'>
                <td>Material</td>
                <td>Pine Wood</td>
              </tr>
              <tr className='h-12'>
                <td>Furniture Finish</td>
                <td>Pine</td>
              </tr>
              <tr className='h-12'>
                <td>Style</td>
                <td>Modern</td>
              </tr>
            </tbody>
          </table>
          <h6 className='mt-6 font-semibold'>About this item</h6>
          <p className='mt-2 text-justify'>
            The Bubema Nils baby bed is a must-have in any child's room. Thanks to the processed solid wood, the bed is very stable and will accompany your child through the first years.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Overview;
