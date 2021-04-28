import _ from 'lodash';

const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    //to change the array into lodash object 
    // slice the array starting from the start index
    //take page size from it and convert it into array
    return _(items).slice(startIndex).take(pageSize).value()
}

export default paginate