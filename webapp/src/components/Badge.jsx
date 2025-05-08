<span
    className="status-badge"
    style={{
        backgroundColor: statusColors[todo.status],
        color: "#fff",
        padding: "4px 8px",
        borderRadius: "12px",
        fontSize: "0.8rem",
        marginLeft: "8px"
    }}
>
  {todo.status.replace("_", " ")}
</span>
