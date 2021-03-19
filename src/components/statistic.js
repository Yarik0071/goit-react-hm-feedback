import React from "react"

const Statistic = ({ total, stanDev }) => {
    return (
      <>
        <ul>
          <li><p>Среднее: {total}</p></li>
          <li><p>Стандартное отклонение: {stanDev}</p></li>
        </ul>
      </>
    );
}

export default Statistic