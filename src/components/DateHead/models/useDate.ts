const useDate = () => {
  const todayDate = new Date();
  const today = `${todayDate.getFullYear()}년 ${
    todayDate.getMonth() + 1
  }월 ${todayDate.getDate()}일`;

  return {today};
};

export default useDate;
