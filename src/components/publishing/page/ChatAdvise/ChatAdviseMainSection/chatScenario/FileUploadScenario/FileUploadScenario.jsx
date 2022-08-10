import React, { useState } from 'react';
import { ReactComponent as IconSetting } from 'assets/svg/icon/icon_setting.svg';
import { ReactComponent as IconFileDownload } from 'assets/svg/icon/fileUpload/icon_file_download.svg';
import { ReactComponent as IconFileExtensionXlsx } from 'assets/svg/icon/fileUpload/icon_file_extension_xlsx.svg';
import { ReactComponent as IconFileUnvailavleBgGrey } from 'assets/svg/icon/fileUpload/icon_file_unavailable_bg_grey.svg';
import OutlineTag from 'components/publishing/atom/tag/OutlineTag';
import BasicAvatarIcon from 'components/publishing/atom/avatarIcon/BasicAvatarIcon';
import IconButton from 'components/publishing/atom/button/IconButton';
import DropdownMenu from 'components/publishing/molecule/dropdown/DropdownMenu';
import './FileUploadScenario.scss';

/** 채팅 상담 - 파일 업로드 시나리오
 */
const FileUploadScenario = () => {
  const [showAvatarMeBadge, setShowAvatarMeBadge] = useState('show');

  /* Bot */
  const BOT_NAME = '브릭';
  const BOT_PROFILE_IMAGE = 'https://cdn.brickchat.dev/assets/icon/brick_main_icon_blue.png';

  /* Customer */
  const CUSTOMER_NAME = '김다영';

  /* Adviser */
  const ADVISER_NAME_CASE1 = '김제니';
  const ADVISER_NICKNAME_CASE1 = '꾸꾸';
  const ADVISER_PROFILE_IMAGE_CASE1 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile2.png';
  const ADVISER_NAME_CASE2 = '안재이';
  const ADVISER_NICKNAME_CASE2 = '안재이'; // 마이페이지 - 닉네임 설정 안했을 경우 이름과 동일한 값이 닉네임 디폴트로 표시됨
  const ADVISER_PROFILE_IMAGE_CASE2 = 'https://cdn.brickchat.dev/assets/img/sample_adviser_profile3.png';

  /* Name tag */
  const NAME_TAG_CUSTOMER = '고객';
  const NAME_TAG_ADVISER = '상담사';
  const NAME_TAG_CHATBOT = 'BOT';

  /* Etc. */
  const CHAT_TIME = '오후 1:30';
  const DIVIDER_CASE1 = '상담사 연결을 요청합니다.';
  const DIVIDER_CASE2 = '님이 상담사로 배정되었습니다.';
  const DIVIDER_CASE3 = '상담이 종료되었습니다.';

  const handleSearchKMS = () => {
    console.log('KMS 지식 검색');
  };
  const handleDeleteMessage = () => {
    console.log('메시지 삭제');
  };

  /* 이미지 업로드 */
  const ALT_FILE_NAME = '파일 이름';
  const IMAGE_SAMPLE_LINK = 'https://cdn.brickchat.dev/assets/img/sample/sample_fileupload.png';
  const handleShowLightbox = () => {
    console.log('🖼 이미지 원본 사이즈 보기');
  };
  const handleDownloadImages = () => {
    console.log('📂 이미지 다운로드');
  };

  /* 파일 업로드 */
  const FILE_EXTENSION = 'xlsx';
  const PERIOD_DATE = '2022.01.18';
  const FILE_SIZE_UNIT = '1KB';
  const handleDownloadfile = () => {
    console.log('📂 파일 다운로드');
  };

  /* 메시지 삭제하기 버튼 */
  const [isShowMessageDropdown, setIsShowMessageDropdown] = useState(false);
  const handleToggleMessageActionButton = () => {
    console.log('메시지 액션 버튼 클릭');
    setIsShowMessageDropdown(!isShowMessageDropdown);
  };
  const handleClickMessageActionButton = e => {
    const currentValue = e.target.textContent;
    console.log(currentValue, '실행');
    setIsShowMessageDropdown(false);
  };
  const messageActionDropdownNormalMessageData = [
    { value: '삭제하기', handleClick: handleClickMessageActionButton },
  ];
  const messageActionDropdownFileuploadCustomerData = [
    { value: '다운로드', handleClick: handleClickMessageActionButton },
  ];
  const messageActionDropdownFileuploadErrorData = [
    { value: '삭제하기', handleClick: handleClickMessageActionButton },
  ];
  const messageActionDropdownFileuploadData = [
    { value: '다운로드', handleClick: handleClickMessageActionButton },
    { value: '삭제하기', handleClick: handleClickMessageActionButton },
  ];

  return (
    <>
      <div className="message_wrapper bot">
        <div className="avatar_container">
          <div className="chat_name_box">{BOT_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CHATBOT}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage={BOT_PROFILE_IMAGE} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              안녕하세요. <em className="highlight">고객</em>님의 쇼핑가이드, 브릭입니다.
              <p>반가워요. 문의하실 내용이 있다면,</p>
              <p>아래 버튼을 눌러주시거나</p>
              <p>메시지 입력창에 입력해주세요.</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper customer">
        <div className="avatar_container">
          <div className="chat_name_box">{CUSTOMER_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CUSTOMER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage="" />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              <em className="highlight">고객</em>대응
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="chat_divider_container">
        <div className="chat_divider_text">{DIVIDER_CASE1}</div>
      </div>
      <div className="message_wrapper customer">
        <div className="avatar_container">
          <div className="chat_name_box">{CUSTOMER_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CUSTOMER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage="" />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">상담사 연결</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper adviser my_advise">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE1}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              안녕하세요. <em className="highlight">고객</em>님 상담사 김제니입니다.
              <p>배송관련해서 문의 주셨는데,</p>
              <p>저희 배송은 당일배송을 하고있습니다.</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                <IconSetting />
              </IconButton>
              <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownNormalMessageData}/>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper adviser my_advise">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE1}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE1} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">상품에 문제가 있으신가요?</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                <IconSetting />
              </IconButton>
              <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownNormalMessageData}/>
            </div>
          </div>
        </div>
        {/* 1. 이미지 업로드 */}
        {/* 1-1. 이미지 1개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents single_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-2. 이미지 2개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents double_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-3. 이미지 3개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents triple_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-4. 이미지 4개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents quadruple_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-5. 이미지 업로드 - 에러 케이스 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents quadruple_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents triple_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents double_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents single_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 2. 파일 업로드 */}
        {/* 2-1. 파일 업로드 - CASE1 : 성공 */}
        <div className="fileupload_container file">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_file_template">
                <div className="fileupload_file_contents">
                  <div className="file_thumnail_box">
                    {/* svg icon : 가상선택자 사용해서 className으로 지정도 가능 */}
                    <IconFileExtensionXlsx />
                  </div>
                  <div className="file_description_box">
                    <p className="filename_title">
                      <span className="filename_title_text">파일이름최대최대최대최대</span>
                      <span className="filename_extension">{`.${FILE_EXTENSION}`}</span>
                    </p>
                    <p className="file_expiration_period">
                      <span className="period_tag">유효기간 : </span>
                      <span className="period_date">{`~${PERIOD_DATE}`}</span>
                    </p>
                    <p className="fileupload_size">
                      <span className="fileupload_size_tag">용량 : </span>
                      <span className="fileupload_size_unit">{FILE_SIZE_UNIT}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 2-2. 파일 업로드 - CASE2 : 실패 */}
        <div className="fileupload_container file">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_file_template">
                <div className="fileupload_file_contents">
                  <div className="file_thumnail_box">
                    <IconFileExtensionXlsx />
                  </div>
                  <div className="file_description_box">
                    <p className="filename_title">
                      <span className="filename_title_text">파일이름최대최대최대최대</span>
                      <span className="filename_extension">{`.${FILE_EXTENSION}`}</span>
                    </p>
                    <p className="file_expiration_period">
                      <span className="period_tag">유효기간 : </span>
                      <span className="period_date">{`~${PERIOD_DATE}`}</span>
                    </p>
                    <p className="fileupload_size">
                      <span className="fileupload_size_tag">용량 : </span>
                      <span className="fileupload_size_unit">{FILE_SIZE_UNIT}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper customer">
        <div className="avatar_container">
          <div className="chat_name_box">{CUSTOMER_NAME}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_CUSTOMER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage="" />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">옷이 너무 큰거 같아요</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        {/* 1. 이미지 업로드 */}
        {/* 1-1. 이미지 1개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents single_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadCustomerData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-2. 이미지 2개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents double_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadCustomerData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-3. 이미지 3개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents triple_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadCustomerData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-4. 이미지 4개 업로드 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents quadruple_image">
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                  <div className="fileupload_image_box" role="button" onClick={handleShowLightbox} onKeyUp={handleShowLightbox} tabIndex={0}>
                    <img className="fileupload_image" alt={ALT_FILE_NAME} src={IMAGE_SAMPLE_LINK} />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadCustomerData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 1-5. 이미지 업로드 에러 */}
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents quadruple_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents triple_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents double_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="fileupload_container image">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_image_template">
                <div className="fileupload_image_contents single_image">
                  <div className="fileupload_image_box">
                    <IconFileUnvailavleBgGrey />
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 2. 파일 업로드 */}
        <div className="fileupload_container file">
          <div className="fileupload_contents_box">
            <div className="message_button_box">
              <div className="fileupload_file_template">
                <div className="fileupload_file_contents">
                  <div className="file_thumnail_box">
                    {/* svg icon : 가상선택자 사용해서 className으로 지정도 가능 */}
                    <IconFileExtensionXlsx />
                  </div>
                  <div className="file_description_box">
                    <p className="filename_title">
                      <span className="filename_title_text">파일이름최대최대최대최대</span>
                      <span className="filename_extension">{`.${FILE_EXTENSION}`}</span>
                    </p>
                    <p className="file_expiration_period">
                      <span className="period_tag">유효기간 : </span>
                      <span className="period_date">{`~${PERIOD_DATE}`}</span>
                    </p>
                    <p className="fileupload_size">
                      <span className="fileupload_size_tag">용량 : </span>
                      <span className="fileupload_size_unit">{FILE_SIZE_UNIT}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadCustomerData}/>
              </div>
            </div>
          </div>
        </div>
        {/* 고객 - 파일 업로드 에러 케이스 있음 */}
        <div className="fileupload_container file">
          <div className="fileupload_contents_box error">
            <div className="message_button_box">
              <div className="fileupload_file_template">
                <div className="fileupload_file_contents">
                  <div className="file_thumnail_box">
                    <IconFileExtensionXlsx />
                  </div>
                  <div className="file_description_box">
                    <p className="filename_title">
                      <span className="filename_title_text">파일이름최대최대최대최대</span>
                      <span className="filename_extension">{`.${FILE_EXTENSION}`}</span>
                    </p>
                    <p className="file_expiration_period">
                      <span className="period_tag">유효기간 : </span>
                      <span className="period_date">{`~${PERIOD_DATE}`}</span>
                    </p>
                    <p className="fileupload_size">
                      <span className="fileupload_size_tag">용량 : </span>
                      <span className="fileupload_size_unit">{FILE_SIZE_UNIT}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="upload_error_icon" />
              <div className="message_action_button_box">
                <IconButton buttonClassName="small outline" handleClick={handleToggleMessageActionButton}>
                  <IconSetting />
                </IconButton>
                <DropdownMenu showDropdownMenu={isShowMessageDropdown ? 'show' : ''} dropdownMenuData={messageActionDropdownFileuploadErrorData}/>
              </div>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper adviser">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE2}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">
              <p>다른 상담사</p>
              <p>(1) 아바타 나 뱃지 안보임</p>
              <p>(2) 내 상담 세션 아닐 경우 대화 내용 삭제할 수 없음(마우스 오버시 버튼 안보이게)</p>
            </div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper adviser message_delete">
        <div className="avatar_container">
          <div className="chat_name_box">{ADVISER_NICKNAME_CASE2}</div>
          <div className="name_tag_box">
            <OutlineTag>{NAME_TAG_ADVISER}</OutlineTag>
          </div>
          <div className="avatar_box">
            <BasicAvatarIcon avatarImage={ADVISER_PROFILE_IMAGE_CASE2} />
          </div>
        </div>
        <div className="message_container">
          <div className="message_button_box">
            <div className="message_contents_box">삭제되었습니다.</div>
            <div className="message_KMS_search_button_box">
              <button type="button" className="message_KMS_search_button" onClick={handleSearchKMS}>
                지식검색
              </button>
            </div>
            <div className="upload_error_icon" />
            <div className="message_action_button_box">
              <IconButton buttonClassName="small outline" handleClick={handleDeleteMessage}>
                <IconSetting />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="timestamp_container">
          <div className="timestamp_box">{CHAT_TIME}</div>
        </div>
      </div>
      <div className="message_wrapper loading">
        <div className="message_contents_box">
          <span className="loading_dot" />
          <span className="loading_dot" />
          <span className="loading_dot" />
        </div>
      </div>
    </>
  );
};

export default FileUploadScenario;
