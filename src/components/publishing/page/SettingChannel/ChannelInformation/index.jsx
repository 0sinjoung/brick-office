import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconCafe24 } from 'assets/svg/icon/icon_cafe24.svg';
import ToastMessage from 'components/publishing/atom/ToastMessage';
import SolidButton from 'components/publishing/atom/button/SolidButton';
import OutlineTextField from 'components/publishing/atom/textFields/inlineTextField/OutlineTextField';
import ValidationTextField from 'components/publishing/atom/textFields/inlineTextField/ValidationTextField';
import './style.scss';

/** 채널 운영 설정 - (4) 채널 정보
 * @children : children
 */
const channel_mock_up_information_data = {
  name: '프롬데이원',
  url: 'https://chat.brickchat.co.kr/fromdayone',
  // domain: 'www.fromdayone.com',
  // builderType: 'cafe24', // etc | cafe24
  domain: '',
  builderType: 'etc', // etc | cafe24
  mainSector: 'fashion', // fashion | beauty | food | etc
}

const ChannelInformation = ({ children }) => {
  /* 0. 공통 - 토스트 메시지 */
  const [toastMessageData, setToastMessageData] = useState({
    isShow: false,
    icon: '',
    message: '',
  });

  
  const [channelInformationData, setChannelInformation] = useState({...channel_mock_up_information_data});
  console.log('DATA:::', channelInformationData);
  
  let CHANNEL_MAIN_SECTOR;
  switch (channelInformationData.mainSector) {
    case 'fashion':
      CHANNEL_MAIN_SECTOR = '패션';
      break;
    case 'beauty':
      CHANNEL_MAIN_SECTOR = '뷰티';
      break;
    case 'food':
      CHANNEL_MAIN_SECTOR = '푸드';
      break;
    default:
      CHANNEL_MAIN_SECTOR = '기타';
  }

  const refHomepageTextField = useRef(null);
  const [currentDomainValue, setCurrentDomainValue] = useState('');
  const [isValidDomainURL, setIsValidDomainURL] = useState(true);
  const [validationErrorText, setValidationErrorText] = useState('');
  
  const handleSaveChannelInformation = () => {
    console.log(currentDomainValue,' 채널 정보 저장하기');
    
    // 중복 예시
    if (currentDomainValue === 'www.apple.com') {
      console.log('중복!');
      setValidationErrorText('다른 채널에서 사용하고 있어요.');
      setIsValidDomainURL(false);
      return;
    }
  
    setCurrentDomainValue('');
    setToastMessageData({ ...toastMessageData, isShow: true, message: '설정을 저장했어요.' });
    setTimeout(() => setToastMessageData({ isShow: false, icon: '', message: '' }), 3000);
  };

  // 홈페이지 URL textField value 감지
  const handleChangeTextField = value => {
    setCurrentDomainValue(value);
    setIsValidDomainURL(true);
  };
  

  return (
    <>
      <div className="contents_wrap scroll">
        <main className="page_wrap full">
          <div className="channel_information_wrap">
            <div className="channel_information_container">
              <div className="channel_information_title_box">
                <h3 className="channel_information_title">채널 정보</h3>
              </div>
              <div className="channel_information_description_bar">채널 만들기 시 입력한 정보가 표시돼요.</div>
              <div className="channel_information_text_fields_container">
                <div className="channel_information_text_field_box channel_name">
                  <div className="channel_information_text_field_label">
                    <div className="label_text">채널명</div>
                  </div>
                  <div className="channel_information_text_field">
                    <OutlineTextField defaultValue={channelInformationData.name} isDimed={true} />
                  </div>
                </div>
                <div className="channel_information_text_field_box messenger_url">
                  <div className="channel_information_text_field_label">
                    <div className="label_text">상담 메신저 URL</div>
                  </div>
                  <div className="channel_information_text_field">
                    <OutlineTextField defaultValue={channelInformationData.url} isDimed={true} />
                  </div>
                </div>
                <div className="channel_information_text_field_box homepage_url">
                  <div className="channel_information_text_field_label">
                    <div className="label_text">홈페이지 URL</div>
                    <div className={`cafe24_badge ${channelInformationData.builderType === 'cafe24' ? 'show' : ''}`}>
                      <IconCafe24 />
                    </div>
                  </div>
                  <div className="channel_information_text_field">
                    <ValidationTextField 
                    ref={refHomepageTextField}
                    placeholderText="브릭을 설치한 홈페이지 URL를 입력해 주세요." 
                    validationErrorText={validationErrorText}
                    defaultValue={channelInformationData.domain} 
                    onChange={handleChangeTextField}
                    isDimed={channelInformationData.builderType === 'cafe24' ? true : false}
                    isValid={isValidDomainURL}
                    />
                  </div>
                </div>
                <div className="channel_information_text_field_box main_sector">
                  <div className="channel_information_text_field_label">
                    <div className="label_text">서비스 업종</div>
                  </div>
                  <div className="channel_information_text_field">
                    <OutlineTextField defaultValue={CHANNEL_MAIN_SECTOR} isDimed={true} />
                  </div>
                </div>
                <div className={`channel_information_save_button ${channelInformationData.builderType === 'cafe24' ? '' : 'show'}`}>
                  <SolidButton buttonClassName="small" handleClick={handleSaveChannelInformation} isDim={currentDomainValue === '' ? true : false}>저장하기</SolidButton>
                </div>
              </div>
            </div>
            {/* 토스트 메시지 */}
            <ToastMessage showToast={toastMessageData.isShow ? 'show' : ''} iconStyle={toastMessageData.icon}>
              {toastMessageData.message}
            </ToastMessage>
          </div>
        </main>
      </div>
    </>
  );
};

ChannelInformation.propTypes = {
  children: PropTypes.any,
};

ChannelInformation.defaultProps = {
  children: '',
};

export default ChannelInformation;
