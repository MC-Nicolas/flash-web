import React, { useEffect, useState } from 'react';

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import FlexContainer from '../FlexContainer/FlexContainer.component';
import { NeumorphicButton } from '../Buttons/Buttons.component';
import { NeumorphicSelect } from '../Inputs/Inputs.component';
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks';
import { setActiveFolder, setActiveSubFolder } from '../../redux/create/create';
import { extractFolders, extractSubFolders } from '../../database/foldersData';

type WhereProps = {
  handleNavigationSection: () => void;
};

const WhereNewCard = ({ handleNavigationSection }: WhereProps) => {
  const { folders } = useAppSelector((state) => state.folders);
  const { activeFolder, activeSubFolder } = useAppSelector(
    (state) => state.activeFolder
  );
  const dispatch = useAppDispatch();

  const [foldersOptions, setFoldersOptions] = useState<any>([]);
  const [decksOptions, setDecksOptions] = useState<any>([]);

  useEffect(() => {
    if (folders) {
      setFoldersOptions(extractFolders(folders));
    }
  }, [folders]);

  useEffect(() => {
    setDecksOptions(extractSubFolders(folders, activeFolder));
  }, [activeFolder]);

  return (
    <FlexContainer
      style={{ backgroundColor: 'rgba(0,0,0,0)' }}
      justifyContent='space-evenly'
      flexDirection='column'
    >
      <FlexContainer
        style={{ backgroundColor: 'rgba(0,0,0,0)', minHeight: '400px' }}
        justifyContent='space-evenly'
      >
        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)' }}
          value={activeFolder}
          label='Folder'
          options={foldersOptions}
          onChange={(e: { target: { value: string } }) =>
            dispatch(setActiveFolder(e.target.value))
          }
        />

        <NeumorphicSelect
          style={{ backgroundColor: 'rgba(0,0,0,0)', minHeight: '400px' }}
          value={activeSubFolder}
          label='Deck'
          options={decksOptions}
          onChange={(e: { target: { value: string } }) =>
            dispatch(setActiveSubFolder(e.target.value))
          }
        />
      </FlexContainer>
      <NeumorphicButton
        icon={<DoubleArrowIcon />}
        onClick={handleNavigationSection}
      />
    </FlexContainer>
  );
};

export default WhereNewCard;
