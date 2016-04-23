package app.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course_info")
public class CourseInfo {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer rowID;
	private String CourseID;
	private String status;
	private String CourseTypeID;
	private String Subject;
	private Date StartDate;
	private Date EndDate;
	private String StudentType;
	private String CityID;
	private String Address;
	private Double Price;
	private Double Duration;
	private String DurationUnitID;
	private String DurationNote;
	private Integer MaxAttendees;
	private String KeyWords;
	private String CourseBreif;
	private String CourseCont;
	private String TeachMethod;
	private String TeachAreaNote;
	private String PosterID;
	private String TeacherID;
	private String TeacherName;
	private String TeacherTitle;
	private String TeachProfile;
	private Integer SeqNumber;
	private Date CreateTime;
	private Date LastEditTime;
	
	
	public Integer getRowID() {
		return rowID;
	}
	public void setRowID(Integer rowID) {
		this.rowID = rowID;
	}
	public String getCourseID() {
		return CourseID;
	}
	public void setCourseID(String courseID) {
		CourseID = courseID;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCourseTypeID() {
		return CourseTypeID;
	}
	public void setCourseTypeID(String courseTypeID) {
		CourseTypeID = courseTypeID;
	}
	public String getSubject() {
		return Subject;
	}
	public void setSubject(String subject) {
		Subject = subject;
	}
	public Date getStartDate() {
		return StartDate;
	}
	public void setStartDate(Date startDate) {
		StartDate = startDate;
	}
	public Date getEndDate() {
		return EndDate;
	}
	public void setEndDate(Date endDate) {
		EndDate = endDate;
	}
	public String getStudentType() {
		return StudentType;
	}
	public void setStudentType(String studentType) {
		StudentType = studentType;
	}
	public String getCityID() {
		return CityID;
	}
	public void setCityID(String cityID) {
		CityID = cityID;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public Double getPrice() {
		return Price;
	}
	public void setPrice(Double price) {
		Price = price;
	}
	public Double getDuration() {
		return Duration;
	}
	public void setDuration(Double duration) {
		Duration = duration;
	}
	public String getDurationUnitID() {
		return DurationUnitID;
	}
	public void setDurationUnitID(String durationUnitID) {
		DurationUnitID = durationUnitID;
	}
	public String getDurationNote() {
		return DurationNote;
	}
	public void setDurationNote(String durationNote) {
		DurationNote = durationNote;
	}
	public Integer getMaxAttendees() {
		return MaxAttendees;
	}
	public void setMaxAttendees(Integer maxAttendees) {
		MaxAttendees = maxAttendees;
	}
	public String getKeyWords() {
		return KeyWords;
	}
	public void setKeyWords(String keyWords) {
		KeyWords = keyWords;
	}
	public String getCourseBreif() {
		return CourseBreif;
	}
	public void setCourseBreif(String courseBreif) {
		CourseBreif = courseBreif;
	}
	public String getCourseCont() {
		return CourseCont;
	}
	public void setCourseCont(String courseCont) {
		CourseCont = courseCont;
	}
	public String getTeachMethod() {
		return TeachMethod;
	}
	public void setTeachMethod(String teachMethod) {
		TeachMethod = teachMethod;
	}
	public String getTeachAreaNote() {
		return TeachAreaNote;
	}
	public void setTeachAreaNote(String teachAreaNote) {
		TeachAreaNote = teachAreaNote;
	}
	public String getPosterID() {
		return PosterID;
	}
	public void setPosterID(String posterID) {
		PosterID = posterID;
	}
	public String getTeacherID() {
		return TeacherID;
	}
	public void setTeacherID(String teacherID) {
		TeacherID = teacherID;
	}
	public String getTeacherName() {
		return TeacherName;
	}
	public void setTeacherName(String teacherName) {
		TeacherName = teacherName;
	}
	public String getTeacherTitle() {
		return TeacherTitle;
	}
	public void setTeacherTitle(String teacherTitle) {
		TeacherTitle = teacherTitle;
	}
	public String getTeachProfile() {
		return TeachProfile;
	}
	public void setTeachProfile(String teachProfile) {
		TeachProfile = teachProfile;
	}
	public Integer getSeqNumber() {
		return SeqNumber;
	}
	public void setSeqNumber(Integer seqNumber) {
		SeqNumber = seqNumber;
	}
	public Date getCreateTime() {
		return CreateTime;
	}
	public void setCreateTime(Date createTime) {
		CreateTime = createTime;
	}
	public Date getLastEditTime() {
		return LastEditTime;
	}
	public void setLastEditTime(Date lastEditTime) {
		LastEditTime = lastEditTime;
	}
	
	
}
