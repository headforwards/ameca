<script lang="ts">
  interface SecretData {
    id: number;
    codeName: string;
    location: string;
    status: string;
  }

  const secretData: SecretData[] = [
    { id: 1, codeName: "Echo-1", location: "Sector A", status: "Active" },
    { id: 2, codeName: "Whisper-2", location: "Sector B", status: "Standby" },
    { id: 3, codeName: "Shadow-3", location: "Sector C", status: "Active" },
    { id: 4, codeName: "Nexus-4", location: "Sector D", status: "Inactive" },
    { id: 5, codeName: "Phantom-5", location: "Sector E", status: "Active" }
  ];
</script>

<div class="secret-container" data-testid="secret-page">
  <h1>Classified Information</h1>
  <p>You've discovered the secret database...</p>

  <div class="table-container">
    <table data-testid="secret-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Code Word</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {#each secretData as row (row.id)}
          <tr data-testid="table-row-{row.id}">
            <td>{row.id}</td>
            <td>{row.codeName}</td>
            <td>{row.location}</td>
            <td>
              <span class="status-indicator {row.status.toLowerCase()}">
                {row.status}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  .secret-container {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .table-container {
    margin-top: 2rem;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: var(--color-theme-3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #000;
  }

  th {
    background: var(--color-theme-1);
    font-weight: 600;
    color: rgb(35,35, 35);
  }

  tr:hover {
    background: rgb(35,35, 35);
  }

  .status-indicator {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }

  .active {
    background: #e6ffe6;
    color: #006400;
  }

  .standby {
    background: #fff3e6;
    color: #cc7700;
  }

  .inactive {
    background: #ffe6e6;
    color: #cc0000;
  }
</style>