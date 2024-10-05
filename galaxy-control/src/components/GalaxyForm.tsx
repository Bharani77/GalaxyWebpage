import React, { useState } from 'react';
import { startGalaxy, updateGalaxy, stopGalaxy } from '../utils/api';
import styles from '../styles/GalaxyControl.module.css';

const GalaxyForm = () => {
  const [formData, setFormData] = useState({
    rc: '',
    attackTime: '',
    defenceTime: '',
    planetName: '',
    intervalTime: '',
    rival: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await startGalaxy(formData);
      setIsLaunched(true);
      alert('Galaxy started successfully');
    } catch (error) {
      alert('Error starting galaxy');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await updateGalaxy(formData);
      alert('Galaxy updated successfully');
    } catch (error) {
      alert('Error updating galaxy');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStop = async () => {
    setIsLoading(true);
    try {
      await stopGalaxy();
      setIsLaunched(false);
      alert('Galaxy stopped successfully');
    } catch (error) {
      alert('Error stopping galaxy');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="rc" className={styles.label}>RC</label>
        <input
          type="text"
          name="rc"
          id="rc"
          value={formData.rc}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="attackTime" className={styles.label}>Attack Time</label>
        <input
          type="number"
          name="attackTime"
          id="attackTime"
          value={formData.attackTime}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="defenceTime" className={styles.label}>Defence Time</label>
        <input
          type="number"
          name="defenceTime"
          id="defenceTime"
          value={formData.defenceTime}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="planetName" className={styles.label}>Planet Name</label>
        <input
          type="text"
          name="planetName"
          id="planetName"
          value={formData.planetName}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="intervalTime" className={styles.label}>Interval Time</label>
        <input
          type="number"
          name="intervalTime"
          id="intervalTime"
          value={formData.intervalTime}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="rival" className={styles.label}>Rival</label>
        <input
          type="text"
          name="rival"
          id="rival"
          value={formData.rival}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button 
          type="submit" 
          className={`${styles.button} ${isLoading ? styles.loadingButton : ''} ${isLaunched ? styles.launchedButton : ''}`}
          disabled={isLoading || isLaunched}
        >
          {isLoading ? (
            <span className={styles.loadingText}>
              Starting<span className={styles.dots}></span>
            </span>
          ) : isLaunched ? (
            'Galaxy Launched'
          ) : (
            'Start Galaxy'
          )}
        </button>
        <button 
          type="button" 
          onClick={handleUpdate} 
          className={`${styles.button} ${isLoading ? styles.loadingButton : ''}`}
          disabled={isLoading || !isLaunched}
        >
          {isLoading ? (
            <span className={styles.loadingText}>
              Updating<span className={styles.dots}></span>
            </span>
          ) : (
            'Update Galaxy'
          )}
        </button>
        <button 
          type="button" 
          onClick={handleStop} 
          className={`${styles.button} ${isLoading ? styles.loadingButton : ''}`}
          disabled={isLoading || !isLaunched}
        >
          {isLoading ? (
            <span className={styles.loadingText}>
              Stopping<span className={styles.dots}></span>
            </span>
          ) : (
            'Stop Galaxy'
          )}
        </button>
      </div>
    </form>
  );
};

export default GalaxyForm;