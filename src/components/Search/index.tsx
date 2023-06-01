import * as S from '@/styles/Search.styles';
import SideBar from '@/components/SideBar';
import { useSideBarStore } from '@/store/sideBarStore';
import { useOptionStore } from '@/store/optionStore';

function Search() {
  const { setOpen } = useSideBarStore();
  const { getYear, getCategory, setTitle } = useOptionStore();

  return (
    <S.SearchContainer>
      <S.SearchWrapper>
        <S.SearchInput
          placeholder="Search for Movies, Series & more"
          size="large"
          type="text"
          onChange={(e: any) => setTitle(e.target.value)}
        />
        <S.MoreButton onClick={setOpen}>
          <S.MenuIcon />
        </S.MoreButton>
      </S.SearchWrapper>
      <S.TagContainer>
        <S.TagItem>{getYear() === '' ? 'All Years' : getYear()}</S.TagItem>
        <S.TagItem>{getCategory() === '' ? 'All Category' : getCategory()}</S.TagItem>
      </S.TagContainer>
      <SideBar />
    </S.SearchContainer>
  );
}

export default Search;
