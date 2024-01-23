namespace Projekt.Models.DTOs.Responses;

public class PostResponseDTO
{
    public Guid Id { get; set; }
    public string Content { get; set; }
    public string Title { get; set; }
    public List<CommentResponseDTO> Comments { get; set; }
    public DateTime Data { get; set; }
}