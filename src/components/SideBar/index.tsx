import * as S from '@/styles/SideBar.styles';
import { useSideBarStore } from '@/store/sideBarStore';
import { useOptionStore } from '@/store/optionStore';

function SideBar() {
  const { isOpen, setClose } = useSideBarStore();
  const { setYear, setCategory } = useOptionStore();

  const generateOptions = () => {
    const currentYear = new Date().getFullYear();
    const options = [];

    for (let year = currentYear; year >= 1985; year--) {
      const option = {
        value: year,
        label: year,
      };

      options.push(option);
    }

    return options;
  };

  const handleChange = (value: any) => {
    if (typeof value === 'number') {
      setYear(value);
      return;
    }
    setCategory(value);
  };

  return (
    <S.DrawerContainer title="Select Options" placement="right" onClose={setClose} open={isOpen}>
      <S.SelectContainer>
        <div>YEAR</div>
        <S.DataSelect
          defaultValue="All Years"
          key="year"
          onChange={handleChange}
          options={generateOptions()}
        ></S.DataSelect>
      </S.SelectContainer>
      <S.SelectContainer>
        <div>CATEGORY</div>
        <S.DataSelect
          defaultValue="Movie"
          key="category"
          onChange={handleChange}
          options={[
            { value: 'movie', label: 'Movie' },
            { value: 'series', label: 'Series' },
            { value: 'episode', label: 'Episode' },
          ]}
        ></S.DataSelect>
      </S.SelectContainer>
    </S.DrawerContainer>
  );
}

export default SideBar;
