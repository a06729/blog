package com.pknu.music.dto;

public class BoardDto {
	private int boardNum;
	private String boardTitle;
	private String boardContent;
	private String createdTime;
	private String userId;
	private String genre;
	
	public int getBoardNum() {
		return boardNum;
	}
	public void setBoardNum(int boardNum) {
		this.boardNum = boardNum;
	}
	public String getBoardTitle() {
		return boardTitle;
	}
	public void setBoardTitle(String boardTitle) {
		this.boardTitle = boardTitle;
	}
	public String getBoardContent() {
		return boardContent;
	}
	public void setBoardContent(String boardContent) {
		this.boardContent = boardContent;
	}
	public String getCreatedTime() {
		return createdTime;
	}
	public void setCreatedTime(String createdTime) {
		this.createdTime = createdTime;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	@Override
	public String toString() {
		return "BoardDto [boardNum=" + boardNum + ", boardTitle=" + boardTitle + ", boardContent=" + boardContent
				+ ", createdTime=" + createdTime + ", userId=" + userId + ", genre=" + genre + "]";
	}
	
	
}
