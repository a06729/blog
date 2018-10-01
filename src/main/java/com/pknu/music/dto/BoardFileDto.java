package com.pknu.music.dto;

import org.springframework.web.multipart.MultipartFile;

public class BoardFileDto {
	private String fileNum;
	private String boardNum;
	private String orignal_File_Name;
	private String stored_File_Name;
	private String file_Size;
	
    private String attachPath; //이미지가 저장될 경로
    
    private String Filename; //파일이름
 
    private MultipartFile upload;
 
    private String CKEditorFuncNum;//CKEditor가 이미지 첨부할때 보내는 데이터
                                    //꼭 대소문자 저렇게 구분해서 줘야 modelAttribute가 인식해서 받아줌 

	public String getFileNum() {
		return fileNum;
	}

	public void setFileNum(String fileNum) {
		this.fileNum = fileNum;
	}

	public String getBoardNum() {
		return boardNum;
	}

	public void setBoardNum(String boardNum) {
		this.boardNum = boardNum;
	}

	public String getOrignal_File_Name() {
		return orignal_File_Name;
	}

	public void setOrignal_File_Name(String orignal_File_Name) {
		this.orignal_File_Name = orignal_File_Name;
	}

	public String getStored_File_Name() {
		return stored_File_Name;
	}

	public void setStored_File_Name(String stored_File_Name) {
		this.stored_File_Name = stored_File_Name;
	}

	public String getFile_Size() {
		return file_Size;
	}

	public void setFile_Size(String file_Size) {
		this.file_Size = file_Size;
	}

	public String getAttachPath() {
		return attachPath;
	}

	public void setAttachPath(String attachPath) {
		this.attachPath = attachPath;
	}

	public String getFilename() {
		return Filename;
	}

	public void setFilename(String filename) {
		Filename = filename;
	}

	public MultipartFile getUpload() {
		return upload;
	}

	public void setUpload(MultipartFile upload) {
		this.upload = upload;
	}

	public String getCKEditorFuncNum() {
		return CKEditorFuncNum;
	}

	public void setCKEditorFuncNum(String cKEditorFuncNum) {
		CKEditorFuncNum = cKEditorFuncNum;
	}

	@Override
	public String toString() {
		return "BoardFileDto [fileNum=" + fileNum + ", boardNum=" + boardNum + ", orignal_File_Name="
				+ orignal_File_Name + ", stored_File_Name=" + stored_File_Name + ", file_Size=" + file_Size
				+ ", attachPath=" + attachPath + ", Filename=" + Filename + ", upload=" + upload + ", CKEditorFuncNum="
				+ CKEditorFuncNum + "]";
	}
	
    
	
}
